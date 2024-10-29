import mongoose from "mongoose";

const exerciseDefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  recs: [
    {
      goal: {
        type: String,
        required: true,
      },
      reps: {
        type: String,
        required: true,
      },
      sets: {
        type: String,
        required: true,
      },
    },
  ],
  similarExercises: [
    {
      refId: {type: Schema.Types.ObjectId, ref: 'ExDef'},
      name: { type: String, required: true },
    },
  ],
});

export default mongoose.Model("ExDef", exerciseDefSchema);
