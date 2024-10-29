import User from '../models/userSchema.mjs';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

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
      return res.status(400).json({ errors: [{ msg: 'User Already Exists' }] });
    }

    newUser = new User({
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      email,
      password,
    });

    const salt = await bcryptjs.genSalt(10);

    newUser.password = await bcryptjs.hash(password, salt);

    await newUser.save();
    console.log(newUser);
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
}

export default { createNewUser };
