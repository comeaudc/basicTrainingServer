import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  //   history: [{}]
  //   currentWorkout: {},
});

export default mongoose.model("User", userSchema);
