import { Router } from 'express';
import { sendEnquiry } from '../controllers/enquiryController.js';

const router = Router();
router.post('/', sendEnquiry);

export default router;

