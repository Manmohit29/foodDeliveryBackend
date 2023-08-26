const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
const mongodb = async () => {
  try {
    //establishing connection with mongodb using mongoose
    await mongoose.connect(url);
    console.log("Connected");
    // //fetching food_items collection data in the form of promise
    // const fetchFoodItemsData = mongoose.connection.db.collection("food_items");
    // const fetchFoodCategory =
    //   mongoose.connection.db.collection("food_category");

    // //data converted into array
    // const foodCategoryData = await fetchFoodCategory.find({}).toArray();
    // const data = await fetchFoodItemsData.find({}).toArray();

    // //making global variable of foodItemsData fetched from foot_items collection
    // global.foodCategory = foodCategoryData;
    // global.foodItemsData = data;
    // console.log("Food category: ", global.foodCategory);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongodb;
