const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();
const RAZORPAY_KEY_ID = "rzp_test_0XxAhodS3nWcBT";
const RAZORPAY_SECRET = "l4fipV8w9wd2yCsWvTisda6x";


router.post("/", async (req, res) => {
  const {amount} = req.body;
  
  try {
    const instance = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_SECRET,
    });

    const options = {
      amount, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

