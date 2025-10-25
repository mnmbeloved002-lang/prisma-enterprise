import type { VercelRequest, VercelResponse } from '@vercel/node';

const HEADER = 'x-telegram-bot-api-secret-token';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).send('tg-webhook: alive');
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const secret = req.headers[HEADER] as string | undefined;
  if (!secret || secret !== process.env.TG_WEBHOOK_SECRET) {
    return res.status(403).send('Forbidden');
  }

  // TODO: добавить валидацию update_id / message.date (Фаза 1)
  return res.status(200).json({ ok: true });
}
