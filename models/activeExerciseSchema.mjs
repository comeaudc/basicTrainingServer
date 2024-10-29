import mongoose from "mongoose";

const activeExScheman = new mongoose.Schema({});

export default mongoose.model("ActiveExercise", activeExScheman);
