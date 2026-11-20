import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbw7URGuWcenxyuOlXZmVJvc262Smvrghgu8Yi4fpQGy5EztdQyC5-quyTIkf5DnXE8Y/exec';
const ORDER_LOG_PATH = '/tmp/moc-hoa-orders.log';

function appendOrderLog(line: string) {
  try {
    fs.appendFileSync(ORDER_LOG_PATH, `${new Date().toISOString()} ${line}\n`, 'utf8');
  } catch {
    // ignore log write errors
  }
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '1mb' }));

  app.post('/api/orders', async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');

    const webhookUrl =
      process.env.ORDER_SHEET_WEBHOOK_URL?.trim() ||
      process.env.VITE_ORDER_SHEET_WEBHOOK_URL?.trim() ||
      DEFAULT_SHEET_WEBHOOK_URL;

    const orderCode = typeof req.body?.orderCode === 'string' ? req.body.orderCode : 'UNKNOWN';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(req.body),
        redirect: 'follow',
      });

      const rawText = await response.text();
      let parsed: { status?: string; message?: string } | null = null;
      try {
        parsed = JSON.parse(rawText);
      } catch {
        parsed = null;
      }

      if (!response.ok || parsed?.status !== 'success') {
        const msg = parsed?.message || `Google Sheet returned status ${response.status}`;
        console.error('[Order Sync Failed]', orderCode, response.status, rawText.slice(0, 200));
        appendOrderLog(`FAIL ${orderCode} ${response.status} ${msg}`);
        res.status(502).json({
          status: 'error',
          message: msg,
        });
        return;
      }

      const syncedAt = new Date().toISOString();
      console.log('[Order Sync OK]', orderCode, syncedAt);
      appendOrderLog(`OK ${orderCode} ${req.body?.type || ''}`);
      res.json({ status: 'success', syncedAt });
    } catch (error) {
      console.error('[Order Sync Error]', orderCode, error);
      appendOrderLog(`ERROR ${orderCode} ${error instanceof Error ? error.message : 'unknown'}`);
      res.status(500).json({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to forward order to Google Sheet',
      });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(
      express.static(distDir, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-store');
          }
        },
      })
    );
    app.get('*', (_req, res) => {
      res.setHeader('Cache-Control', 'no-store');
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Mộc hoa server running on http://0.0.0.0:${port}`);
  });
}

startServer();
