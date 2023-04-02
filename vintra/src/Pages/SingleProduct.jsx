// import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useToast,Badge
} from '@chakra-ui/react';

import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
function SingleProduct(){
   let productId=useParams();
   console.log(productId)
   const [props,setProps]=useState({})
   const getProducts = () => {
      fetch(`https://buyfashionvish.onrender.com/products?productId=${productId.id}`)
        .then((response) =>{
      
        return response.json()})
        .then((data) => data)
        .then((data) => {
         console.log(data)
         setProps(...data);
         
        });}
        useEffect(()=>{
         getProducts();
        },[])
      //   console.log({...props})
       
      //   console.log(props)
        return <>
        <ProductPage{...props}/>
        
        </>
}

 async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  let deta=await response.json();
  return deta // parses JSON response into native JavaScript objects
}
 



const ProductPage = ({ landingPageUrl, product, rating, ratingCount, discount, brand, searchImage, productId,effectiveDiscountPercentageAfterTax, inventoryInfo, images, primaryColour, additionalInfo, mrp, price }) => {
    const [selectedSize, setSelectedSize] = useState(null);
  const toast = useToast();
 
  const handleAddToCart = () => {
    if (selectedSize === null) {
      toast({
        title: 'Please select a size',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else {
      // Here you can write the code to add the selected product and size to the cart
      toast({
        title: 'Product added to cart',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      console.log({landingPageUrl, product, rating, ratingCount, discount, brand, searchImage, effectiveDiscountPercentageAfterTax, inventoryInfo, images, primaryColour, additionalInfo, mrp, price})
         postData('https://buyfashionvish.onrender.com/cart',{landingPageUrl, product, rating, ratingCount, discount, brand, searchImage, effectiveDiscountPercentageAfterTax, inventoryInfo, images, primaryColour, additionalInfo, mrp, price,quantity:1}).then(data => console.log(data,"msin"))
  .catch(error => console.error(error));
    }
  };

  const handleAddToWishlist = () => {
    // Here you can write the code to add the selected product to the wishlist
    toast({
      title: 'Product added to wishlist',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Box p="6" maxW="1000px" mt="150px" pt="150px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto">
      <Image src={searchImage} alt={product} />

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {product}
      </Box>

      <Box>
        <Stack direction="row" align="center" justify="space-between">
          <Box>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {rating?.toFixed(1)}
            </Badge>
            <Text fontSize="sm" color="gray.500">
              ({ratingCount} ratings)
            </Text>
          </Box>

          <Box>
            <Badge borderRadius="full" px="2" colorScheme="red">
              {discount}% off
            </Badge>
          </Box>
        </Stack>

        <Text mt="2" color="gray.500">
          {brand}
        </Text>
      </Box>

      <Box d="flex" mt="2" alignItems="center">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {primaryColour}
        </Badge>
        <Text ml="2" fontSize="sm" color="gray.500">
          {additionalInfo}
        </Text>
      </Box>

      <Box>
        <Stack direction="row" align="center" justify="center" mt="2">
          <Text as="del" color="gray.500" fontSize="sm">
            Rs. {mrp}
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            Rs. {price}
          </Text>
        </Stack>
        <Text color="green.500" fontSize="sm">
          You save Rs. {mrp - price} ({effectiveDiscountPercentageAfterTax}%)
        </Text>
      </Box>
<Text fontWeight="bold" fontSize="lg">
              Select Size
            </Text>
            <Box m="auto">
         {/* <Stack direction="row" spacing={55} > */}
              {inventoryInfo?.map((inventory) => (
                <Button mt="10" ml="5" mb="10"
                  key={inventory.skuId}
                  size="md"
                  variant={selectedSize === inventory.label ? 'solid' : 'outline'}
                  onClick={() => setSelectedSize(inventory.label)}
                >
                  {inventory.label}
                </Button>
              ))}
           
       </Box>   
          
      <Box mt="2">
        <Button colorScheme="teal" variant="solid" size="sm" onClick={handleAddToWishlist}>
                Add to Wishlist
        </Button>
        <Button ml="5" size="sm"  colorScheme="pink" onClick={handleAddToCart}>
                Add to Cart
        </Button>
      </Box>
    </Box>
  );
};
export default SingleProduct;