import React from "react";
import styles from "./styles/CartPriceCard.module.css";
import { useProductsContext } from "../../contexts/products.context.js";

export const CartPriceCard = () => {
  const { productsState } = useProductsContext();
  const { productsList, cartList } = productsState;
  let noOfItems = 0;
  let origPrice = 0;
  let totalDiscount = 0;
  let finalPrice = 0;
  let quantity = 1;
  cartList.forEach((cartItem) => {
    let finalCartItem = productsList.find(
      (proditem) => proditem._id === cartItem.id
    );
    const { discount, discountedPrice, originalPrice } = finalCartItem.price;
    quantity = finalCartItem.quantity;
    noOfItems += 1;
    origPrice += originalPrice * quantity;
    totalDiscount += discount * quantity;
    finalPrice += discountedPrice * quantity;
  });
  return (
    <div className={styles.cartPrice}>
      <header className={styles.cartPriceHeader}>{`PRICE DETAILS`}</header>
      <main className={styles.cartPriceMain}>
        <div className={styles.price}>
          <div>{`Price (${noOfItems} ${
            noOfItems === 1 ? "item" : "items"
          })`}</div>
          <div>{`₹${origPrice}`}</div>
        </div>
        <div className={styles.dicount}>
          <div>Discount</div>
          <div className={styles.discountAmt}>{`-₹${totalDiscount}`}</div>
        </div>
      </main>
      <footer className={styles.cartPriceFooter}>
        <div>Total Amount</div>
        <div className={styles.totalAmt}>{`₹${finalPrice}`}</div>
      </footer>
    </div>
  );
};
