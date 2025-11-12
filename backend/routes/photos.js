import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get('/', (req, res) => {
  const dir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(dir)) return res.json([]);
  const files = fs.readdirSync(dir);
  const urls = files.map((f) => `/uploads/${f}`);
  res.json(urls);
});

export default router;

