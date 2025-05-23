// Imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import globalErr from "./middleware/globalErr.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import workoutRoutes from "./routes/workoutRoutes.mjs";
import exerciseRoutes from "./routes/exerciseRoutes.mjs";
import buildWorkoutRoutes from './routes/buildWorkoutRoutes.mjs';
import cors from "cors";
import connectDB from "./config/db.mjs";

// Setup
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// DB Connection
connectDB();

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use("/api/build", buildWorkoutRoutes)

// Global Err Handling
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
