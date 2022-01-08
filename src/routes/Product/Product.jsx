import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/Product.module.css";
import {
  ProductHeader,
  ProductImage,
  ProductInformation,
  ProductPrice,
} from "../../components";
import { getProductData } from "../../api/api-response";
import { useLoadingScreen } from "../../contexts/loadingscreen.context";

export const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const { setShowLoadingScreen } = useLoadingScreen();

  useEffect(() => {
    document.title = productData.name ? productData.name : "Fin Mart";
  }, [productData]);
  useEffect(() => {
    getProductData({ id, setShowLoadingScreen, setProductData });
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
        <ProductPrice id={id} price={price} inStock={inStock} />
      </div>
    </div>
  );
};
