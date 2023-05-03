import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get('reference');
  return (
    <Box>
      <VStack h="100vh" justifyContent={'center'}>
        <Heading>Order Successfull</Heading>
        <Text>Reference No. {referenceNum}</Text>
      </VStack>
    </Box>
  );
};
