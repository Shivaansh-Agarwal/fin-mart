import React from "react";
import styles from "./styles/ProductImage.module.css";

export const ProductImage = ({ image }) => {
  return (
    <div className={styles.product__image}>
      <img src={image} alt="product" />
    </div>
  );
};
