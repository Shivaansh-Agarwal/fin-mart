import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Grid, ModalSort } from "../../components";
import { useProductsContext } from "../../contexts/products.context.js";
import "./productsListing.css";

export const ProductsListing = () => {
  const { productsState } = useProductsContext();
  const [isModalSortOpen, setIsModalSortOpen] = useState(false);

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "SORT_NAME_A_Z":
        return products.sort((a, b) =>
          a.name.trim().toUpperCase() > b.name.trim().toUpperCase() ? 1 : -1
        );
      case "SORT_NAME_Z_A":
        return products.sort((a, b) =>
          a.name.trim().toUpperCase() > b.name.trim().toUpperCase() ? -1 : 1
        );
      case "SORT_PRICE_LOW_TO_HIGH":
        return products.sort((a, b) => {
          return a.price.discountedPrice - b.price.discountedPrice;
        });
      case "SORT_PRICE_HIGH_TO_LOW":
        return products.sort((a, b) => {
          return b.price.discountedPrice - a.price.discountedPrice;
        });
      default:
        return products;
    }
  };

  const filterProducts = (products, filterBy) => {
    switch (filterBy) {
      case "FILTER_BY_STOCKS":
        return products.filter(({ categories }) =>
          categories.includes("STOCKS")
        );
      case "FILTER_BY_PERSONAL_FINANCE":
        return products.filter(({ categories }) =>
          categories.includes("PERSONAL_FINANCE")
        );
      case "FILTER_BY_MUTUAL_FUNDS":
        return products.filter(({ categories }) =>
          categories.includes("MUTUAL_FUNDS")
        );
      case "FILTER_BY_REAL_ESTATE":
        return products.filter(({ categories }) =>
          categories.includes("REAL_ESTATE")
        );
      default:
        return products;
    }
  };

  let { productsList, sortBy, filterBy } = productsState;
  let finalProductsList = sortProducts([...productsList], sortBy);
  finalProductsList = filterProducts(finalProductsList, filterBy);

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
        <Grid productsList={finalProductsList} />
      </div>
      <ModalSort isOpen={isModalSortOpen} setIsOpen={setIsModalSortOpen} />
    </div>
  );
};
