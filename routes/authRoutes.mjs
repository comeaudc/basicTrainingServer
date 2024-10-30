import express from 'express';
import authCTRL from '../controllers/authController.mjs';
import auth from '../middleware/auth.mjs';
const router = express.Router();

router.route('/').get(auth, authCTRL.findUserById);

export default router;
