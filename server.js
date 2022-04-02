const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 2600;
const connect = require("./configure");

app.use(express.json());
app.use(cors());

// routers details
const DishRouter = require("./Controllers/Dish.Controller");
const UserRouter = require("./Controllers/User.Controller");
const RestaurantRouter = require("./Controllers/Restaurant.Controller");

app.use("/restaurants/", RestaurantRouter);
app.use("/users/", UserRouter);
app.use("/dishes/", DishRouter);

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Port ${port} is listening..`);
    }
    catch(err){
        console.log(err.message);
    }
})
