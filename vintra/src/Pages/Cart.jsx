import { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Button,Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://buyfashionvish.onrender.com/cart');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleIncrease = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    deleteItem(id)
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return `$${total?.toFixed(2)}`;
  };
  function deleteItem(itemId) {
   fetch(`https://example.com/api/items/${itemId}`, {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json'
     }
   })
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       console.log('Item deleted successfully');
     })
     .catch(error => {
       console.error('There was a problem with the DELETE request:', error);
     });
 }
  return (
    <Box mt="150px">
      {cartItems.map((item) => (
        <Flex key={item.id} alignItems="center" mb={4}>
          <Image src={item.searchImage} alt={item.product} boxSize={100} objectFit="contain" mr={4} />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {item.product}
            </Text>
            <Text>${item.price.toFixed(2)}</Text>
            <Flex alignItems="center" mt={2}>
              <Button size="sm" mr={2} onClick={() => handleDecrease(item.id)}>
                -
              </Button>
              <Text>{item.quantity}</Text>
              <Button size="sm" ml={2} onClick={() => handleIncrease(item.id)}>
                +
              </Button>
            </Flex>
            <Button size="sm" colorScheme="red" mt={2} onClick={() => handleRemove(item.id)}>
              Remove
            </Button>
          </Box>
        </Flex>
      ))}
       <CheckoutPage total={calculateTotal()}/>
      {/* {cartItems.length > 0 && (
        <Box mb={4}>
          <Text fontSize="xl" fontWeight="bold">
            Total: {calculateTotal()}
          </Text>
          <Button size="lg" colorScheme="green" mt={4}>
            Checkout
          </Button>
         
        </Box>
      )} */}
    </Box>
  );
};

export default Cart;

function CheckoutPage({ total }) {
   const navigate=useNavigate();
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Checkout
      </Heading>
      <Box p={4} bg="gray.100" mb={4}>
        <Heading as="h3" size="md" mb={2}>
          Order Summary
        </Heading>
        <Box mb={2}>
          <span>Subtotal:</span>
          <span>{total}</span>
        </Box>
        <Box mb={2}>
          <span>Shipping:</span>
          <span>$0.00</span>
        </Box>
        <Box fontWeight="bold">
          <span>Total:</span>
          <span>{total}</span>
        </Box>
      </Box>
      <Button colorScheme="blue" size="lg" onClick={()=>navigate("/Done")} >
        Place Order
      </Button>
    </Box>
  );
}
