import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from './Card';
import axios from 'axios';

export default function Home() {
  const checkoutHandler = async (amount) => {
    const { data } = await axios.post('http://localhost:4000/api/checkout', {
      amount,
    });

    console.log(data);
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
