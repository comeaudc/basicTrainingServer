import ExDef from "../models/exerciseDefSchema.mjs";

//Add One Exercise
async function addExercise(req, res) {
  try {
    let newExercise = new ExDef(req.body);

    await newExercise.save();

    res.json({ newExercise });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Get All Exercises
async function getAllExercises(req, res) {
  try {
    let allExercses = await ExDef.find({});

    res.json(allExercses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
}

export default { addExercise, getAllExercises };
