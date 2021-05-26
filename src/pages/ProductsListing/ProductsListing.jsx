import React, { useState } from "react";
import { Grid, ModalSort } from "../../components";
import { useProductsContext } from "../../contexts/products.context.js";
import "./productsListing.css";

//import productsData from "../../data.js";

export const ProductsListing = () => {
  const { productsState, productsDispatch } = useProductsContext();
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
        <Grid productsList={productsState} />
      </div>
      <ModalSort isOpen={isModalSortOpen} setIsOpen={setIsModalSortOpen} />
    </div>
  );
};
