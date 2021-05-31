import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, ModalSort } from "../../components";
import { useProductsContext } from "../../contexts/products.context.js";
import { LoadingScreen } from "../../components";
import "./productsListing.css";

export const ProductsListing = () => {
  const { productsState } = useProductsContext();
  const [isModalSortOpen, setIsModalSortOpen] = useState(false);

  return (
    <div className="productsListing">
      <div className="productsListing__wrapper">
        <div className="productsListing__buttons">
          <button
            onClick={() => {
              setIsModalSortOpen(true);
            }}
          >
            Sort By
          </button>
          <button>Filter</button>
        </div>
        <Grid productsList={productsState.productsList} />
      </div>
      <ModalSort isOpen={isModalSortOpen} setIsOpen={setIsModalSortOpen} />
    </div>
  );
};
