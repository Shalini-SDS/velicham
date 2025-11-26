import { Router } from 'express';
import { handleCompetitionEnrollment } from '../controllers/competitionController.js';

const router = Router();
router.post('/enrollment', handleCompetitionEnrollment);

export default router;