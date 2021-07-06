import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home.jsx";
import { ProductsListing } from "./ProductsListing/ProductsListing.jsx";
import { Wishlist } from "./Wishlist/Wishlist.jsx";
import { Login } from "./Login/Login.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";
import { Product } from "./Product/Product.jsx";
import { Cart } from "./Cart/Cart.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};
