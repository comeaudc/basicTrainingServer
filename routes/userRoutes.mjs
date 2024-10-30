import express from 'express';
import userCTRL from '../controllers/userController.mjs';
import { check } from 'express-validator';

const router = express.Router();

// @route:   POST api/users
// @desc:    Create/Registering User
// @access:  Public
router
  .route('/')
  .post(
    [
      check('firstName', 'First name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 }),
    ],
    userCTRL.createNewUser
  );

export default router;
