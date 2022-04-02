const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    isVeg: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
