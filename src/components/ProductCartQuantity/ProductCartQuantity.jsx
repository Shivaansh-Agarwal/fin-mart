import React, { useEffect, useState } from "react";
import styles from "./ProductCartQuantity.module.css";

export const ProductCartQuantity = ({ quantity, productsDispatch }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [isDecButtonDisabled, setIsDecButtonDisabled] = useState(true);
  const [isIncButtonDisabled, setIsIncButtonDisabled] = useState(false);
  function quantityHandler(action) {
    if (action === "DEC") {
      setProductQuantity((productQuantity) => {
        if (productQuantity > 1) {
          return productQuantity - 1;
        } else {
          return productQuantity;
        }
      });
    } else if (action === "INC") {
      setProductQuantity((productQuantity) => {
        if (productQuantity < 5) {
          return productQuantity + 1;
        } else {
          return productQuantity;
        }
      });
    }
  }
  useEffect(() => {
    setIsDecButtonDisabled(productQuantity === 1);
    setIsIncButtonDisabled(productQuantity === 5);
  }, [productQuantity]);
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
      <span className={styles.quantityNum}>{productQuantity}</span>
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
