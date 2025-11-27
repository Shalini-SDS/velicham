import { Router } from 'express';
import { sendEnquiry, getEnquiries, getEnquiryStats } from '../controllers/enquiryController.js';

const router = Router();

router.post('/', sendEnquiry);
router.get('/', getEnquiries);
router.get('/stats', getEnquiryStats);

export default router;

