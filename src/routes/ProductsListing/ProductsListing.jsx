import React, { useState } from "react";
import { Grid, ModalSort, ModalFilter, Button } from "../../components";
import { useProductsContext } from "../../contexts/products.context.js";
import "./productsListing.css";

export const ProductsListing = () => {
  const { productsState } = useProductsContext();
  const [isModalSortOpen, setIsModalSortOpen] = useState(false);
  const [isModalFilterOpen, setIsModalFilterOpen] = useState(false);

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
    if (filterBy.length !== 0) {
      return products.filter(({ categories }) =>
        categories.some((item) => filterBy.includes(item))
      );
    }
    return products;
  };

  let { productsList, sortBy, filterBy } = productsState;
  let finalProductsList = sortProducts([...productsList], sortBy);
  finalProductsList = filterProducts(finalProductsList, filterBy);

  return (
    <div className="productsListing">
      <div className="productsListing__wrapper">
        <div className="productsListing__buttons">
          <Button
            onClickHandler={() => {
              setIsModalSortOpen(true);
            }}
            displayText="Sort By"
            type="btn-primary"
          />
          <Button
            onClickHandler={() => {
              setIsModalFilterOpen(true);
            }}
            displayText="Filter By"
            type="btn-primary"
          />
        </div>
        <Grid productsList={finalProductsList} />
      </div>
      <ModalSort isOpen={isModalSortOpen} setIsOpen={setIsModalSortOpen} />
      <ModalFilter
        isOpen={isModalFilterOpen}
        setIsOpen={setIsModalFilterOpen}
      />
    </div>
  );
};
