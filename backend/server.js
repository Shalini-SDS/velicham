import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';
import enquiryRoutes from './routes/enquiry.js';
import uploadRoutes from './routes/upload.js';
import photosRoutes from './routes/photos.js';
import competitionRoutes from './routes/competition.js';

dotenv.config();

console.log('Email config:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length);
console.log('EMAIL_TO:', process.env.EMAIL_TO);

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve uploads folder
app.use('/uploads', express.static(uploadsDir));

// Serve admin dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

app.use('/api/enquiry', enquiryRoutes);
app.use('/api/photos', photosRoutes);
app.use('/api/photos', uploadRoutes); // upload at /api/photos/upload
app.use('/api/competition', competitionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

