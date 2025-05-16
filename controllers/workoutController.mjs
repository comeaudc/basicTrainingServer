import { get } from "mongoose";
import Workout from "../models/workoutSchema.mjs";

let startWorkout = async (req, res) => {
  try {
    const { exercises = [], duration, notes } = req.body;
    const userId = req.user.id;

    const workout = new Workout({
      user: userId,
      exercises,
      duration,
      notes,
    });

    await workout.save();

    res.status(201).json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const addExercises = async (req, res) => {
  const workoutID = req.params.id;

  const { exDef, sets } = req.body;

  if (!exDef || !Array.isArray(sets) || sets.length === 0) {
    res.status(400).json({ message: "Invalid Data" });
  }

  try {
    const workout = await Workout.findById(workoutID);

    if (!workout) res.status(404).json({ message: "Workout Not Found" });

    workout.exercises.push({ exerciseDefinition: exDef, sets });

    await workout.save();

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
      .populate("user", "name email")
      .populate("exercises.exerciseDefinition", "name category");

    if (!workout) res.status(404).json({ error: "Workout Not Found" });

    res.status(200).json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

export default { startWorkout, addExercises, getWorkoutById };
