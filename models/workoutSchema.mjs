import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    createAt: { type: Date, required: true},
    // exercises: []
});

export default mongoose.model('Workout', workoutSchema);