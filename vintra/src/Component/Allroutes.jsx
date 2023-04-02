import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Pages/Cart';
import Home from "../Pages/Home"
import PaymentComponent from '../Pages/PaymentComponent';
import PaymentSuccessful from '../Pages/PaymentSuccessful';
import Product from '../Pages/Product';
import SingleProductPage from "../Pages/SingleProduct"

 export default function AllRoutes(){
   return <Routes>
     
   <Route path="/" element={<Home/>}></Route>
   <Route path="/products" element={<Product/>}></Route>
   <Route path="/products/:id" element={<SingleProductPage/>}></Route>

   <Route path="/cart" element={<Cart/>}></Route>
   <Route path="/done" element={<PaymentComponent/>}></Route>
   <Route path="/thanks" element={<PaymentSuccessful/>}> </Route>
  

 </Routes>
}