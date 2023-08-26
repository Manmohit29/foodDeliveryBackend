const Order = require("../models/Order");
const OrderData = async (req, res) => {
  let data = req.body.order_data;
  data.splice(0, 0, { order_date: req.body.order_date });

  let emailId = await Order.findOne({ email: req.body.email });
  if (!emailId) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        {
          $push: { order_data: data },
        }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const MyOrder = async (req, res) => {
  try {
    let eId = await Order.findOne({ email: req.body.email });

    res.json({ orderData: eId });
  } catch (error) {
    res.send("Error", error.message);
  }
};
module.exports = { OrderData, MyOrder };
