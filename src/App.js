import React from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { Topbar } from "./components";
import { Home, ProductsListing } from "./routes";
import "./styles/App.css";

Modal.setAppElement("#root");
toast.configure();

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
