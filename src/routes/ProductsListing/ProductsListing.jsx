import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, ModalSort } from "../../components";
import { useProductsContext } from "../../contexts/products.context.js";
import { LoadingScreen } from "../../components";
import "./productsListing.css";

export const ProductsListing = () => {
  const { productsState, productsDispatch } = useProductsContext();
  const [isModalSortOpen, setIsModalSortOpen] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  async function getProducts() {
    try {
      setShowLoadingScreen(true);
      const { data } = await axios.get(
        "https://emart.shivaansh98.repl.co/api/v1/products"
      );
      productsDispatch({
        type: "INITIALIZE_PRODUCT_LIST",
        payload: data.products,
      });
    } catch (error) {
      console.error("ERROR while fetching products", error);
      toast.error("Error while fetching Products. Please try later! " + error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setShowLoadingScreen(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

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
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};
