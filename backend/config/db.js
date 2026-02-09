import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongo_url = process.env.MONGO_CONN;

    if (!mongo_url) {
      console.error("MONGO_CONN is not defined in .env");
      process.exit(1);
    }

    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
