import User from '../models/userSchema.mjs';
import bryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

// Create User
async function createNewUser(req, res) {
  try {
    
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
}

export default { createNewUser };
