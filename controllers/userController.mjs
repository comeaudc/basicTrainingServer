import User from "../models/userSchema.mjs";
import History from "../models/historySchema.mjs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// Create User
async function createNewUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    let newUser = await User.findOne({ email });

    if (newUser) {
      return res.status(400).json({ errors: [{ msg: "User Already Exists" }] });
    }

    newUser = new User({
      name: {
        firstName,
        lastName,
      },
      email,
      password,
    });

    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(password, salt);

    // Save the user
    await newUser.save();

    // Create user history
    const history = new History({ user: newUser._id, workouts: [] });
    await history.save();

    // Link history to user and save again
    newUser.history = history._id;
    newUser.currentWorkout = null;
    await newUser.save();

    // Generate JWT token
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    const token = await jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: 3600,
    });

    res.json({ token });
  } catch (err) {
    console.error("Error during user creation:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}

export default { createNewUser };
