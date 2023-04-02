import { Button, Container, Heading, Text } from "@chakra-ui/react";

function PaymentSuccessful() {
  return (
    <Container maxW="xl" mt={150} >
      <Heading as="h1" mb={4} textAlign="center">
        Thank You for Shopping!
      </Heading>
      <Text fontSize="lg" mb={8} textAlign="center">
        Your payment has been processed successfully.
      </Text>
      <Button colorScheme="blue" size="lg" onClick={() => window.location.href="/"}>
        Continue Shopping
      </Button>
    </Container>
  );
}

export default PaymentSuccessful;
