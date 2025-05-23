import mongoose from "mongoose";

const repScheme = new mongoose.Schema(
  {
    sets: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 1 },
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
    repScheme: { type: repScheme, required: true },
  },
  { _id: false }
);

const buildWorkoutSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String },
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
        "Full Body",
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

buildWorkoutSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("BuildWorkout", buildWorkoutSchema);
