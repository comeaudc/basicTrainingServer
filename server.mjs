// Imports
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.mjs";
import bodyParser from "body-parser";

// Setup
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// DB Connection

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});