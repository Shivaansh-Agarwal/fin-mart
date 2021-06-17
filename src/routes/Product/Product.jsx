import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./styles/Product.module.css";
import { LoadingScreen } from "../../components";
import { ProductHeader } from "./ProductHeader.jsx";
import { ProductImage } from "./ProductImage.jsx";
import { ProductInformation } from "./ProductInformation.jsx";
import { ProductPrice } from "./ProductPrice.jsx";

export const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    getProduct({ id, setShowLoadingScreen, setProductData });
  }, []);

  if (Object.keys(productData).length === 0) return null;

  const {
    name,
    description,
    images,
    price,
    ratings,
    inStock,
    additionalDetails,
    overview: productOverview,
    aboutAuthor: aboutTheAuthor,
  } = productData;
  const { author } = additionalDetails;

  return (
    <div className={styles.product}>
      <ProductHeader
        name={name}
        description={description}
        author={author}
        ratings={ratings}
      />
      <div className={styles.product__main}>
        <ProductImage image={images[0]} />
        <ProductInformation
          productOverview={productOverview}
          aboutTheAuthor={aboutTheAuthor}
          additionalDetails={additionalDetails}
        />
        <ProductPrice price={price} inStock={inStock} />
      </div>
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};

async function getProduct({ id, setShowLoadingScreen, setProductData }) {
  try {
    setShowLoadingScreen(true);
    const { data } = await axios.get(
      `https://emart.shivaansh98.repl.co/api/v1/products/${id}`
    );
    setProductData(data.product);
    console.log(data);
  } catch (e) {
    toast.error(
      "Error while fetching product details. Please try later! " + error,
      {
        position: toast.POSITION.BOTTOM_CENTER,
      }
    );
  } finally {
    setShowLoadingScreen(false);
  }
}
