import React, { useState } from "react";
import { Grid, ModalSort } from "../../components";
import "./productsListing.css";

import productsData from "../../data.js";

export const ProductsListing = () => {
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
        <Grid productsList={productsData} />
      </div>
      <ModalSort isOpen={isModalSortOpen} setIsOpen={setIsModalSortOpen} />
    </div>
  );
};
