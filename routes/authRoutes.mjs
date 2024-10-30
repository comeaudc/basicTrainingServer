import express from 'express';
import authCTRL from '../controllers/authController.mjs';
import auth from '../middleware/auth.mjs';
import { check } from 'express-validator';
const router = express.Router();

router
  .route('/')
  .get(auth, authCTRL.findUserByToken)
  .post(
    [
      check('email', 'Please include a valid email'),
      check('password', 'Password Required'),
    ],
    authCTRL.loginUser
  );

export default router;
