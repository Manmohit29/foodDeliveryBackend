const mongoose = require("mongoose");

const getFoodItems = async (req, res) => {
  try {
    const foodItems = mongoose.connection.db.collection("food_items");
    const data = await foodItems.find({}).toArray();
    global.foodItems = data;
    res.send(global.foodItems);
  } catch (error) {
    console.log(error);
  }
};

const getFoodCategory = async (req, res) => {
  try {
    const foodCategory = mongoose.connection.db.collection("food_category");
    const data = await foodCategory.find({}).toArray();
    global.foodCategory = data;
    res.send(global.foodCategory);
  } catch (error) {}
};

module.exports = { getFoodItems, getFoodCategory };
