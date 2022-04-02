

const express = require('express');
const router = express.Router();
const Restaurant = require("../models/Restaurant.model");

router.post("/", async(req, res) => {
    try {
        const Restaurants = await Restaurant.create(req.body);
        return res.status(200).send(Restaurants);
    } 
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.get("/", async(req, res) => {
    try {
        const Restaurants = await Restaurant.find().lean().exec();
        return res.status(200).send(Restaurants);
    } 
    catch(err){
        return res.status(500).send(err.message);
    }
}
);

module.exports = router;

