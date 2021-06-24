import React, { useEffect, useState } from "react";
import styles from "./ProductCartQuantity.module.css";

export const ProductCartQuantity = ({ id, quantity, productsDispatch }) => {
  const [isDecButtonDisabled, setIsDecButtonDisabled] = useState(true);
  const [isIncButtonDisabled, setIsIncButtonDisabled] = useState(false);
  function quantityHandler(action) {
    if (action === "DEC") {
      productsDispatch({
        type: "DEC_PRODUCT_QTY_CART",
        payload: id,
      });
    } else if (action === "INC") {
      productsDispatch({
        type: "INC_PRODUCT_QTY_CART",
        payload: id,
      });
    }
  }
  useEffect(() => {
    setIsDecButtonDisabled(quantity === 1);
    setIsIncButtonDisabled(quantity === 5);
  }, [quantity]);
  return (
    <div className={styles.cartQuantityWrapper}>
      <span className={styles.quantityText}>Qty:</span>
      <button
        disabled={isDecButtonDisabled}
        onClick={() => {
          quantityHandler("DEC");
        }}
      >
        -
      </button>
      <span className={styles.quantityNum}>{quantity}</span>
      <button
        disabled={isIncButtonDisabled}
        onClick={() => {
          quantityHandler("INC");
        }}
      >
        +
      </button>
    </div>
  );
};
