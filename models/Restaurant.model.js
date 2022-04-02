const mongoose = require("mongoose");

const restautantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categories: { type: String, required: true },
  rating: { type: String, required: true },
  delivery_time: { type: String, required: true },
  price: { type: String, required: true },
  image_url: { type: String, required: true },
  offer_status: { type: Boolean, required: true },
  offer: { type: Number, required: true },
  coupon_code: { type: String, required: true },
  address: { type: String, required: true }
},{
    versionKey: false,
    timeStamps: true,
});


const Restaurant = mongoose.model("Restaurant", restautantSchema);

module.exports = Restaurant;