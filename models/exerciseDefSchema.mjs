import mongoose from "mongoose";

const exerciseDefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  recs: [
    {
      goal: { type: String, required: true }, // e.g., 'strength', 'endurance'
      sets: {
        min: { type: Number },
        max: { type: Number },
      },
      reps: {
        min: { type: Number },
        max: { type: Number },
      },
    },
  ],
  similarExercises: [
    {
      refId: { type: mongoose.Schema.Types.ObjectId, ref: "ExDef" },
    },
  ],
});

export default mongoose.model("ExDef", exerciseDefSchema);
