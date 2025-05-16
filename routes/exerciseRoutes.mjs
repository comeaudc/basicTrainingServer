import express from "express";
import exerciseCTRL from "../controllers/exerciseController.mjs";

const router = express.Router();

router
  .route("/")
  .post(exerciseCTRL.addExercise)
  .get(exerciseCTRL.getAllExercises);

// router.get("/seed", exerciseCTRL.seedExercises);

export default router;
