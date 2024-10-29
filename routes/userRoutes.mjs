import express from 'express';
import userCTRL from '../controllers/userControllers.mjs';

const router = express.Router();

// @route:   POST api/users
// @desc:    Create/Registering User
// @access:  Public
router.route('/').post(userCTRL.createNewUser);

export default router;
