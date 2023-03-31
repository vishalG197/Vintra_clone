import React, { useState, useEffect } from "react";
import ProductCart from "./ProductComponent/ProductCart"
import Radio from "./ProductComponent/Radio"
import CheckBox from "./ProductComponent/CheckBox"
// import Loader from "./Loader";

export default function Product(){
const [products,setProducts]=useState([]);
const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");
const[Err,setError]=useState(true)
  const getProducts = () => {
   fetch("http://localhost:3000/products")
     .then((response) =>{console.log(response)
      setError(true)
     return response.json()})
     .then((data) => data)
     .then((data) => {
      console.log(data)
       setProducts(data);
       setError(false)
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
     selectedGender.length === 0 &&
     selectedBrand.length === 0 &&
     selectedCategory.length === 0 &&
     selectedSearch === ""
   ) {
     return products;
   } else if (selectedGender.length !== 0) {
     if (
       selectedGender.length !== 0 &&
       selectedBrand.length !== 0 &&
       selectedCategory.length !== 0
     ) {
       return products
         .filter((product) => selectedGender.includes(product.gender))
         .filter((product) => selectedBrand.includes(product.brand))
         .filter((product) => selectedCategory.includes(product.category));
     } else if (selectedGender.length !== 0 && selectedBrand.length !== 0) {
       return products
         .filter((product) => selectedGender.includes(product.gender))
         .filter((product) => selectedBrand.includes(product.brand));
     } else if (selectedCategory.length !== 0 && selectedGender.length !== 0) {
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
//  if(Err){
//    return <Loader/>
// }
 return <>
 <main>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-2 fw-bold">
              <aside>
                <div className="mx-1 my-1 py-1">
                  <div>
                    <div className="my-2">FILTERS</div>
                    {genFinal?.map((val) => {
                      return (
                        <Radio value={val} label={val} onClick={genderFilter} />
                      );
                    })}
                  </div>
                </div>

                <div className="mx-1 my-1 py-1">
                  <div>
                    <div className="my-2">CATEGORIES</div>
                    {catFinal?.map((val) => {
                      return (
                        <CheckBox value={val} label={val} onClick={catFilter} />
                      );
                    })}
                  </div>
                </div>

                <div className="mx-1 my-1 py-1">
                  <div>
                    <div className="my-2">BRAND</div>
                    {brandFinal?.map((val) => {
                      return (
                        <CheckBox
                          value={val}
                          label={val}
                          onClick={brandFilter}
                        />
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-md-10">
              <section>
                <div className="row products">
                  {filteredData()?.map((val) => {
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
 </>
}