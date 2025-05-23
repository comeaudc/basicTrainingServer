import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  admin: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  currentWorkout: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
  history: { type: mongoose.Schema.Types.ObjectId, ref: "History" },
});

userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

export default mongoose.model("User", userSchema);
