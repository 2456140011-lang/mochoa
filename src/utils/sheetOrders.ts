export interface SheetOrderPayload {
  orderCode: string;
  type: string;
  customerName: string;
  contact: string;
  address?: string;
  details: string;
  total?: string;
}

export interface SheetOrderResponse {
  syncedAt?: string;
}

const FALLBACK_WEBHOOK_URL =
  import.meta.env.VITE_ORDER_SHEET_WEBHOOK_URL?.trim() ||
  'https://script.google.com/macros/s/AKfycbw7URGuWcenxyuOlXZmVJvc262Smvrghgu8Yi4fpQGy5EztdQyC5-quyTIkf5DnXE8Y/exec';

export async function submitOrderToSheet(
  payload: SheetOrderPayload
): Promise<SheetOrderResponse> {
  const response = await fetch('/api/orders', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const result = (await response.json().catch(() => ({}))) as {
      status?: string;
      message?: string;
      syncedAt?: string;
    };

    if (!response.ok || result.status !== 'success') {
      throw new Error(result.message || 'Ghi dữ liệu vào Google Sheet thất bại.');
    }

    return { syncedAt: result.syncedAt };
  }

  // Fallback for static-only hosting where /api/orders is not mounted
  const directRes = await fetch(FALLBACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
    redirect: 'follow',
  });

  const directJson = (await directRes.json().catch(() => ({}))) as {
    status?: string;
    message?: string;
  };

  if (!directRes.ok || directJson.status !== 'success') {
    throw new Error(directJson.message || 'Ghi dữ liệu vào Google Sheet thất bại.');
  }

  return { syncedAt: new Date().toISOString() };
}
