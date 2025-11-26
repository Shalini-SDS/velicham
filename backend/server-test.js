import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log('Testing basic server without routes...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);

app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

app.post('/api/test', (req, res) => {
  console.log('Test endpoint called with:', req.body);
  res.json({ success: true, received: req.body });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});