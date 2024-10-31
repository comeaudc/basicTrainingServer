// Imports
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import exerciseRoutes from "./routes/exerciseRoutes.mjs";
import bodyParser from "body-parser";
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/exercise", exerciseRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
