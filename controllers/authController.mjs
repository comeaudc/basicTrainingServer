import User from '../models/userSchema.mjs';

// async function findUserById
async function findUserById(req, res) {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.error.err;
    res.status(500).json('Server Error');
  }
}

export default { findUserById };
