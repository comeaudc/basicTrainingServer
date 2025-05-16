import ExDef from "../models/exerciseDefSchema.mjs";
import seedData from "../utilities/seedData.mjs";

//Add One Exercise
async function addExercise(req, res) {
  try {
    let newExercise = await ExDef.create(req.body);

    res.json({ newExercise });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}

// Seed exercises
async function seedExercises(req, res) {
  try {
    await ExDef.create(seedData);

    res.send("Data Seeded");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}

// Get All Exercises
async function getAllExercises(req, res) {
  try {
    let allExercses = await ExDef.find({});

    res.json(allExercses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}

export default { addExercise, getAllExercises, seedExercises };
