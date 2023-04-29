import { response } from 'express';
import { instance } from '../server.js';

export const checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: 'INR',
  };

  const order = await instance.orders.create(options);
  console.log(order);
  res.send({
    status: 200,
    message: 'HEllo jii',
  });
};
