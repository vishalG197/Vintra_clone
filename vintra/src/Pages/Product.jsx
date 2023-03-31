import React, { useState, useEffect } from "react";
import ProductCart from "./ProductComponent/ProductCart"
import Radios from "./ProductComponent/Radio"
import CheckBox from "./ProductComponent/CheckBox"
import Loader from "./Loader";
import { Box, Flex, Spacer, Text,Spinner,Grid} from "@chakra-ui/react";
export default function Product(){
const [products,setProducts]=useState([]);
const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");
const[load,setLoad]=useState(true)
  const getProducts = () => {
   fetch("http://localhost:3000/products?_limit=9&&_Page=1")
     .then((response) =>{console.log(response)
      setLoad(true)
     return response.json()})
     .then((data) => data)
     .then((data) => {
      console.log(data)
       setProducts(data);
       setLoad(false)
     });}
   // Gender push in array
  var genderArr = [];
  products?.forEach((elem) => {
    genderArr.push(elem.gender);
  });

// Gender unique push
  genderArr = new Set(genderArr);
  var genFinal = [];
  for (let item of genderArr) {
    genFinal.push(item);
    genFinal.sort();
  }

  // Brand push in array
  var brandArr = [];
  products?.forEach((elem) => {
    brandArr.push(elem.brand);
  });

  // Brand unique push
  brandArr = new Set(brandArr);
  var brandFinal = [];
  for (let item of brandArr) {
    brandFinal.push(item);
    brandFinal.sort();
  }

  // Category push in array
  var catArr = [];
  products?.forEach((elem) => {
    catArr.push(elem.category);
  });

  // Category unique push
  catArr = new Set(catArr);
  var catFinal = [];
  for (let item of catArr) {
    catFinal.push(item);
    catFinal.sort();
  }

  // useEffect 
  useEffect(() => {
   getProducts();
  }, []);
  const genderFilter = (event) => {
   setSelectedGender(event.target.value);
 };


 const brandFilter = (event) => {
   if (event.target.checked) {
     setSelectedBrand([...selectedBrand, event.target.value]);
   } else {
     setSelectedBrand(
       selectedBrand.filter((elem) => elem !== event.target.value)
     );
   }
 };


 const catFilter = (event) => {
   if (event.target.checked) {
     setSelectedCategory([...selectedCategory, event.target.value]);
   } else {
     setSelectedCategory(
       selectedCategory.filter((elem) => elem !== event.target.value)
     );
   }
 };


 const searchFilter = (event) => {
   setSelectedSearch(event.target.value);
 };

// Filtered Data Logic
 const filteredData = () => {
   if (
     selectedGender?.length === 0 &&
     selectedBrand?.length === 0 &&
     selectedCategory?.length === 0 &&
     selectedSearch === ""
   ) {
     return products;
   } else if (selectedGender?.length !== 0) {
     if (
       selectedGender?.length !== 0 &&
       selectedBrand?.length !== 0 &&
       selectedCategory?.length !== 0
     ) {
       return products
         .filter((product) => selectedGender.includes(product.gender))
         .filter((product) => selectedBrand.includes(product.brand))
         .filter((product) => selectedCategory.includes(product.category));
     } else if (selectedGender?.length !== 0 && selectedBrand?.length !== 0) {
       return products
         .filter((product) => selectedGender.includes(product.gender))
         .filter((product) => selectedBrand.includes(product.brand));
     } else if (selectedCategory?.length !== 0 && selectedGender?.length !== 0) {
       return products
         .filter((product) => selectedGender.includes(product.gender))
         .filter((product) => selectedCategory.includes(product.category));
     }
     return products.filter((product) =>
       selectedGender.includes(product.gender)
     );
   } else if (selectedBrand.length !== 0) {
     if (selectedBrand.length !== 0 && selectedCategory.length !== 0) {
       return products
         .filter((product) => selectedBrand.includes(product.brand))
         .filter((product) => selectedCategory.includes(product.category));
     }
     return products.filter((product) =>
       selectedBrand.includes(product.brand)
     );
   } else if (selectedCategory.length !== 0) {
     return products.filter((product) =>
       selectedCategory.includes(product.category)
     );
   } else if (selectedSearch !== "") {
     return products.filter((product) =>
       product.product.toLowerCase().includes(selectedSearch.toLowerCase())
     );
   }
 };
 if(load){
   return <Loader/>
}

 return (
  <Box width={"98%"} gap="10px" m={"auto"} bg="white" mt="150px">
      <Flex display={["none", "flex", "Flex"]}>
        <Box w="20%" display={["none", "initial" ,"initial", "initial"]} >
        <Box w="100%" p="3" display={["none", "flex", "Flex"]}>
          <Flex p="10px">
            <Text color={"black"} as="b">
              FILTER
            </Text>
            <Spacer />
            <Text pl="15px" color="red">CLEAR ALL</Text>
            </Flex>
            </Box>
        <Box border={"1px solid black"} borderBottom={"0px"} p="10px">
    <Text color={"black"} textAlign={"start"} mt="5px" mb="10px">Gender</Text>
      
    {genFinal?.map((val) => {
                      return (
                        <Radios value={val} label={val} onClick={genderFilter} />
                      );
                    })}
  </Box>
  <Box border={"1px solid black"} borderBottom={"0px"} p="10px">
  <Text color={"black"} textAlign={"start"} mt="5px" mb="10px">Category</Text>
            {catFinal?.map((val) => {
                      return (
                        <CheckBox value={val} label={val} onClick={catFilter} />
                      );
                    })}
                    </Box>
                    <Box border={"1px solid black"} borderBottom={"1px"} p="10px">
                    <Text color={"black"} textAlign={"start"} mt="5px" mb="10px">Brand</Text>
                    {brandFinal?.map((val) => {
                      return (
                        <CheckBox
                          value={val}
                          label={val}
                          onClick={brandFilter}
                        />
                      );
                    })}
                    </Box>


</Box>
       
     
<Box w="80%" display={["none", "initial" ,"initial", "initial"]} ml="30px" >
      <Flex>
        
        {false ? (
          <Box m="auto">
            {" "}
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : ( 
        <Box className="row products">
          <Grid templateColumns='repeat(3, 1fr)' gap={10}>
          {filteredData().map((val) => {
            return (
             
              <ProductCart
                img={val.searchImage}
                product={val.product}
                brand={val.brand}
                sizes={val.sizes}
                price={val.price}
                mrp={val.mrp}
                dis={val.discountDisplayLabel}
                link={val.landingPageUrl}
              />
              
            );
          })} 
           </Grid>
         
          </Box>
        
          
        
        )}
      </Flex>
      </Box>
      </Flex>
    </Box>
  
 )
}