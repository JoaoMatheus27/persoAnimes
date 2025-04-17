import { Router } from 'express';
import { getPersonagens } from '../controllers/personagensController';

const router = Router();

router.get('/', getPersonagens);

export default router;
