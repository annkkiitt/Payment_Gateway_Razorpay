import { response } from 'express';
import { instance } from '../server.js';
import crypto from 'crypto';
import { Payment } from '../model/paymentModel.js';

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: 'INR',
  };

  const order = await instance.orders.create(options);
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentverification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  if (generated_signature == razorpay_signature) {
    //database comes here
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

export const getkey = async (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
};
