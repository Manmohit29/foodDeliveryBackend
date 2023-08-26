const express = require("express");
const router = express.Router();
const { OrderData, MyOrder } = require("../controllers/orderController");

router.post("/orderData", OrderData);
router.post("/myOrderData", MyOrder);

module.exports = router;
