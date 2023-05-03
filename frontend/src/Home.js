import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from './Card';
import axios from 'axios';

export default function Home() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get('http://localhost:4000/api/getkey');

    const {
      data: { order },
    } = await axios.post('http://localhost:4000/api/checkout', {
      amount,
    });

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: 'INR',
      name: 'Mr. White', //your business name
      description: 'Test Transaction',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: 'http://localhost:4000/api/paymentverification',
      prefill: {
        name: 'Gaurav Kumar', //your customer's name
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#121212',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack
        h={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
        direction={['column', 'row']}
      >
        <Card
          amount={5000}
          img={
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359481'
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={4000}
          img={
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229'
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}
