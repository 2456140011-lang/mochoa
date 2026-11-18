import React, { useState } from 'react';
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { ProductItem } from '../data/mocHoaData';
import { SafeImage } from './SafeImage';

export interface CartItem {
  key: string;
  product: ProductItem;
  variant: string;
  note?: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
}

const formatVnd = (amount: number) =>
  `${amount.toLocaleString('vi-VN')}đ`;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 250000;
  const shippingFee = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 25000;
  const total = subtotal + shippingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !deliveryAddress.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ người nhận.');
      return;
    }
    setErrorMsg('');
    const orderNumber = `MH-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderConfirmed(orderNumber);
    onClearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#3F2E24]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Giỏ quà Mộc hoa"
    >
      <div className="bg-[#FAF5EC] border-l border-[#D8C9B7] w-full max-w-md h-full flex flex-col shadow-2xl">
        <div className="px-6 py-4 border-b border-[#D8C9B7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#735748]" />
            <h3 className="font-serif text-xl font-semibold text-[#3F2E24]">Giỏ quà của bạn</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setOrderConfirmed(null);
              onClose();
            }}
            aria-label="Đóng giỏ quà"
            className="p-2 rounded-lg text-[#735748] hover:bg-[#D8C9B7]/40 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderConfirmed ? (
            <div className="p-6 bg-[#F4EBDD] border border-[#A6AD91] rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-[#3F2E24]">
                <CheckCircle2 className="w-5 h-5 text-[#735748]" />
                <h4 className="font-serif text-xl font-semibold">
                  Đơn hàng {orderConfirmed} đã được tiếp nhận
                </h4>
              </div>
              <p className="text-sm text-[#4A352A] leading-relaxed">
                Cảm ơn <strong>{customerName}</strong>! Mộc hoa sẽ liên hệ xác nhận qua số{' '}
                <strong>{customerPhone}</strong> và chuẩn bị gói quà thủ công gửi tới{' '}
                <strong>{deliveryAddress}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderConfirmed(null);
                  onClose();
                }}
                className="px-4 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] rounded-lg cursor-pointer"
              >
                Tiếp tục khám phá
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <p className="font-serif text-xl text-[#3F2E24]">Giỏ quà đang trống</p>
              <p className="text-sm text-[#735748]">
                Hãy chọn một tấm thiệp hoa kẹp, bó hoa kẽm nhung hoặc Combo Mộc Ý để gửi trao yêu
                thương nhé.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-[#F4EBDD] bg-[#735748] rounded-lg cursor-pointer"
              >
                Xem sản phẩm
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 p-3.5 bg-[#F4EBDD] border border-[#D8C9B7] rounded-xl"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#D8C9B7]">
                      <SafeImage
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base font-semibold text-[#3F2E24] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.key)}
                          aria-label={`Xóa ${item.product.name}`}
                          className="text-[#735748] hover:text-[#3F2E24] p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#735748] mb-1">{item.variant}</p>
                      {item.note && (
                        <p className="text-xs italic text-[#4A352A] bg-[#FAF5EC] px-2 py-1 rounded mb-2">
                          Lời nhắn: &ldquo;{item.note}&rdquo;
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="inline-flex items-center border border-[#D8C9B7] rounded-lg bg-[#FAF5EC]">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.key, -1)}
                            aria-label="Giảm số lượng"
                            className="p-1.5 text-[#735748] hover:text-[#3F2E24] cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.key, 1)}
                            aria-label="Tăng số lượng"
                            className="p-1.5 text-[#735748] hover:text-[#3F2E24] cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-[#3F2E24] tabular-nums">
                          {formatVnd(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary & COD Verification Form */}
              <div className="pt-4 border-t border-[#D8C9B7] space-y-2 text-sm">
                <div className="flex justify-between text-[#4A352A]">
                  <span>Tạm tính</span>
                  <span className="tabular-nums">{formatVnd(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#4A352A]">
                  <span>Phí giao hàng (Miễn phí từ 250.000đ)</span>
                  <span className="tabular-nums">
                    {shippingFee === 0 ? 'Miễn phí' : formatVnd(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-semibold text-[#3F2E24] pt-2 border-t border-[#D8C9B7]">
                  <span>Tổng thanh toán (COD / Chuyển khoản)</span>
                  <span className="tabular-nums">{formatVnd(total)}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-3 pt-2">
                <h4 className="font-serif text-base font-semibold text-[#3F2E24]">
                  Thông tin giao nhận quà tặng
                </h4>
                <input
                  type="text"
                  placeholder="Họ và tên người đặt / người nhận"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại liên hệ"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                />
                <textarea
                  rows={2}
                  placeholder="Địa chỉ giao hàng chi tiết"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2 text-sm text-[#3F2E24] focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                />
                {errorMsg && (
                  <p className="text-xs font-medium text-[#735748] bg-[#E7C5C0]/40 px-3 py-2 rounded-lg">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                >
                  Xác nhận đặt quà · {formatVnd(total)}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
