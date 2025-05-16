import express from "express";
import Workout from "../models/workoutSchema.mjs";
import workoutController from "../controllers/workoutController.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

// @route: POST /api/workout
// @desc: create new workout
// @access: Private
router.post("/", auth, workoutController.startWorkout);

router.post("/:id/add", auth, workoutController.addExercises);

router.get("/:id", auth, workoutController.getWorkoutById);

export default router;
