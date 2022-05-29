import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProduct from "./Page/EditProduct/EditProduct";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Product from "./Page/Product/Product";
import Register from "./Page/Register/Register";
import Selling from "./Page/Selling/Selling";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Selling" element={<Selling />} />
        <Route path="/Edit/:id" element={<EditProduct />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;