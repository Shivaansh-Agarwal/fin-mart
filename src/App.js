import React from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { Topbar } from "./components";
import { Home, ProductsListing } from "./pages";
import "./styles/App.css";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListing />} />
      </Routes>
    </div>
  );
}

export default App;
