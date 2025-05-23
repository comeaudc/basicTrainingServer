import Workout from "../models/workoutSchema.mjs";
import History from "../models/historySchema.mjs";
import User from "../models/userSchema.mjs";

let startWorkout = async (req, res) => {
  try {
    const { exercises = [], duration, focus, notes } = req.body;
    const userId = req.user.id;

    const user = await User.findOne({ _id: userId });

    if (!user)
      return res
        .status(401)
        .json({ errors: [{ msg: "User Not Found, Check Auth Status" }] });

    if (user.currentWorkout)
      return res
        .status(401)
        .json({ errors: [{ msg: "Workout Already in Progress" }] });

    const workout = new Workout({
      user: userId,
      focus,
      duration,
      exercises,
      notes,
    });

    await workout.save();

    user.currentWorkout = workout._id;

    await user.save();

    res.status(201).json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
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
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
      .populate("user", "name email")
      .populate("exercises.exerciseDefinition", "name category");

    if (!workout) res.status(404).json({ errors: "Workout Not Found" });

    res.status(200).json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

const stopWorkout = async (req, res) => {
  try {
    const { notes } = req.body;

    let user = await User.findById(req.user.id).select(
      "history currentWorkout"
    );

    if (!user)
      return res.status(400).json({ errors: [{ msg: "User Not Found" }] });

    const history = await History.findById(user.history);

    let archiveWorkout = {
      workout: user.currentWorkout,
      notes,
    };

    history.workouts.push(archiveWorkout);

    await history.save();

    user.currentWorkout = null;

    await user.save();

    res.send(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

export default { startWorkout, addExercises, getWorkoutById, stopWorkout };
