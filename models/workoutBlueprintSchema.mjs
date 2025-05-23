import mongoose from "mongoose";

const workoutBlueprintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  focus: {
    type: String,
    enum: [
      "Push",
      "Pull",
      "Legs",
      "Chest",
      "Back",
      "Shoulders",
      "Core",
      "Arms",
      "Upper Body",
      "Lower Body",
    ],
  },
  exercises: { type: [exerciseSchema], required: true },
});

workoutSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("Blueprint", workoutBlueprintSchema);
