import express from 'express';
import exerciseCTRL from '../controllers/exerciseController.mjs';

const router = express.Router();

router.route('/').get(exerciseCTRL.addExercise);

export default router;
