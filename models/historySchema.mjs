import mongoose from "mongoose";

const workoutHistoryItemSchema = new mongoose.Schema({
  workout: { type: mongoose.Schema.Types.ObjectId, ref: "Workout", required: true },
  completedAt: { type: Date, default: Date.now },
  notes: { type: String }
}, { _id: false });

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  workouts: [workoutHistoryItemSchema],
}, { timestamps: true });


historySchema.index({ user: 1 });

export default mongoose.model("History", historySchema);