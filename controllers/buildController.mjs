import BuildWorkout from "../models/buildWorkoutSchema.mjs";
import User from "../models/userSchema.mjs";

let startBuildWorkout = async (req, res) => {
  try {
    const { name, exercises = [], duration, focus, notes } = req.body;
    const userId = req.user.id;

    const user = await User.findOne({ _id: userId });

    if (!user)
      return res
        .status(401)
        .json({ errors: [{ msg: "User Not Found, Check Auth Status" }] });

    const build = new BuildWorkout({
      user: userId,
      name,
      focus,
      duration,
      exercises,
      notes,
    });

    await build.save();

    res.status(201).json(build);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

const addExercisesToBuild = async (req, res) => {
  const workoutID = req.params.id;

  const { exDef, repScheme } = req.body;

  if (!exDef || !repScheme) {
    res.status(400).json({ message: "Invalid Data" });
  }

  try {
    const build = await BuildWorkout.findById(workoutID);

    if (!build) res.status(404).json({ message: "Workout Not Found" });

    build.exercises.push({ exerciseDefinition: exDef, repScheme });

    await build.save();

    res.json(build);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

const deleteWorkout = async (req, res) => {
  const workoutID = req.params.id;

  try {
    let deletedWorkout = await BuildWorkout.findByIdAndDelete(workoutID);

    res.json(deletedWorkout);
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", errors: err.message });
  }
};

export default { startBuildWorkout, addExercisesToBuild, deleteWorkout };
