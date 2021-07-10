import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./styles/Product.module.css";
import { LoadingScreen } from "../../components";
import { ProductHeader } from "./ProductHeader.jsx";
import { ProductImage } from "./ProductImage.jsx";
import { ProductInformation } from "./ProductInformation.jsx";
import { ProductPrice } from "./ProductPrice.jsx";
import { getProduct } from "../../api/api-serviceCalls.js";

export const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

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
      <LoadingScreen showLoadingScreen={showLoadingScreen} />
    </div>
  );
};

async function getProductData({ id, setProductData, setShowLoadingScreen }) {
  const productResponse = await getProduct(id);
  if (productResponse.success) {
    setProductData(productResponse.data);
  } else {
    toast.error(productsResponse.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  setShowLoadingScreen(false);
}
