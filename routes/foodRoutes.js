const express = require("express");
const {
  getFoodItems,
  getFoodCategory,
} = require("../controllers/foodController");
const router = express.Router();

router.get("/foodItems", getFoodItems);
router.get("/foodCategory", getFoodCategory);
module.exports = router;
