import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home.jsx";
import { ProductsListing } from "./ProductsListing/ProductsListing.jsx";
import { Login } from "./Login/Login.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsListing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
