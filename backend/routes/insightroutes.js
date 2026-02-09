import express from "express";
import Insight from "../models/insight.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let filters = {};

    if (req.query.end_year) {
      filters.end_year = Number(req.query.end_year);
    }

    if (req.query.topic) {
      filters.topic = req.query.topic;
    }

    if (req.query.sector) {
      filters.sector = req.query.sector;
    }

    if (req.query.region) {
      filters.region = req.query.region;
    }

    if (req.query.country) {
      filters.country = req.query.country;
    }

    if (req.query.pestle) {
      filters.pestle = req.query.pestle;
    }

    if (req.query.source) {
      filters.source = req.query.source;
    }

    const data = await Insight.find(filters);
    res.json(data);
  } catch (error) {
    console.error("Error fetching insights:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
