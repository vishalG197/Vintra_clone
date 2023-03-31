import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home"
import Product from '../Pages/Product';
 export default function AllRoutes(){
   return <Routes>
     
   <Route path="/" element={<Home/>}></Route>
   <Route path="/products" element={<Product/>}></Route>
   <Route path="/products/:id" element={<h1>home</h1>}></Route>

   <Route path="/cart/:id" element={<h1>home</h1>}></Route>
   <Route path="/done" element={<h1>home</h1>}>
   
   </Route>

 </Routes>
}