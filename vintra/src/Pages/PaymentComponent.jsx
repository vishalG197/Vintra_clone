import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function PaymentComponent() {
  const [cardNumber, setCardNumber] = useState('');
  const navigate=useNavigate();
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = event => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = event => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = event => {
    setCvv(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // handle payment logic here
    return navigate("/thanks")
    console.log('Payment submitted');
  };

  return (
    <Box p={4} mt="150px">
      <Heading as="h2" size="lg" mb={4}>
        Payment Information
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Expiration Date</FormLabel>
            <Input
              type="text"
              name="expiry"
              value={expiry}
              onChange={handleExpiryChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              name="cvv"
              value={cvv}
              onChange={handleCvvChange}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Submit Payment
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default PaymentComponent;
