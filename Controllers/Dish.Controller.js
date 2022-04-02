const express = require("express");
const router = express.Router();
const Dish = require("../models/Dishes.model");

router.post("/", async (req, res) => {
  try {
    const Dishes = await Dish.create(req.body);
    return res.status(200).send(Dishes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const Dishes = await Dish.find().lean().exec();
    return res.status(200).send(Dishes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
