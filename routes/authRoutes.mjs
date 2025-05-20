import express from "express";
import authCTRL from "../controllers/authController.mjs";
import auth from "../middleware/auth.mjs";
import { check } from "express-validator";
const router = express.Router();

// /api/auth
router
  .route("/")
  .get(auth, authCTRL.findUserByToken)
  .post(
    [
      check("email", "Please include a valid email").not().isEmpty(),
      check("password", "Password Required").not().isEmpty(),
    ],
    authCTRL.loginUser
  );

export default router;
