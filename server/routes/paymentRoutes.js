import express from 'express';
import {
  checkout,
  getkey,
  paymentverification,
} from '../controller/paymentController.js';

const router = express.Router();

router.route('/checkout').post(checkout);

router.route('/paymentverification').post(paymentverification);

router.route('/getkey').get(getkey);

export default router;
