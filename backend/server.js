import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiry.js';
import uploadRoutes from './routes/upload.js';
import photosRoutes from './routes/photos.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/enquiry', enquiryRoutes);
app.use('/api/photos', photosRoutes);
app.use('/api/photos', uploadRoutes); // upload at /api/photos/upload

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

