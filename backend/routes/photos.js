import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const DEFAULT_PHOTOS = [
  '/uploads/default-1.jpg',
  '/uploads/default-2.jpg',
  '/uploads/default-3.jpg'
];

router.get('/', (req, res) => {
  const dir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(dir)) return res.json(DEFAULT_PHOTOS);
  const files = fs.readdirSync(dir);
  const urls = files.map((f) => `/uploads/${f}`);
  res.json(urls.length > 0 ? urls : DEFAULT_PHOTOS);
});

router.post('/delete', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });

  const filename = url.split('/').pop();
  const filepath = path.join(__dirname, '../uploads', filename);

  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  try {
    fs.unlinkSync(filepath);
    console.log('Photo deleted:', filename);
    res.json({ success: true });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
});

export default router;

