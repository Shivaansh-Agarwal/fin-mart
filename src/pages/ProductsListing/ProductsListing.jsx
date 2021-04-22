import React from "react";
import { Grid } from "../../components";
import "./productsListing.css";

import productsData from "../../data.js";

export const ProductsListing = () => {
  return (
    <div className="productsListing">
      <div className="productsListing__wrapper">
        <div className="productsListing__buttons">
          <button>Sort By</button>
          <button>Filter</button>
        </div>
        <Grid productsList={productsData} />
      </div>
    </div>
  );
};
