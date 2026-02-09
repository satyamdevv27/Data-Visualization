import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import insightRoutes from "./routes/insightroutes.js";

dotenv.config(); // load env variables first

const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(express.json());

// connect to MongoDB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Api working");
});

// API routes
app.use("/api/insights", insightRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
