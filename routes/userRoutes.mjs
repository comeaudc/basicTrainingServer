import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('User Routes')
})

export default router;