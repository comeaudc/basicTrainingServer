import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
  {
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const exerciseSchema = new mongoose.Schema(
  {
    exerciseDefinition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExDef",
      required: true,
    },
    sets: { type: [setSchema], required: true },
  },
  { _id: false }
);

const workoutSchema = new mongoose.Schema(
  {
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
    duration: { type: Number }, // Optional: total time in minutes
    notes: { type: String }, // Optional: general workout notes
  },
  { timestamps: true }
);

workoutSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("Workout", workoutSchema);
