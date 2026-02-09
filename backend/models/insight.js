import mongoose from "mongoose";

const InsightSchema = new mongoose.Schema(
  {},
  {
    strict: false,
    timestamps: true,
  },
);

export default mongoose.model("Insight", InsightSchema, "data");
