import express from "express";
import auth from "../middleware/auth.mjs";
import buildController from "../controllers/buildController.mjs";

const router = express.Router();

router.route("/").post(auth, buildController.startBuildWorkout);

router
  .route("/:id", auth)
  .put(buildController.addExercisesToBuild)
  .delete(buildController.deleteWorkout);

export default router;
