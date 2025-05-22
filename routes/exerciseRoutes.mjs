import express from "express";
import exerciseCTRL from "../controllers/exerciseController.mjs";
import auth from "../middleware/auth.mjs";
import adminAuth from "../middleware/adminAuth.mjs";

const router = express.Router();

router
  .route("/")
  .post(exerciseCTRL.addExercise)
  .get(exerciseCTRL.getAllExercises);

router.post("/createWO", auth, adminAuth, (req, res) => {
  res.send("testing authentication");
});

// router.get("/seed", exerciseCTRL.seedExercises);

export default router;
