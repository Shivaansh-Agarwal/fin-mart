import React from "react";
import styles from "./styles/Cart.module.css";
import { useProductsContext } from "../../contexts/products.context.js";
import { CartPriceCard } from "./CartPriceCard.jsx";
import { CartItemCard } from "./CartItemCard.jsx";

export const Cart = () => {
  const { productsState, productsDispatch } = useProductsContext();
  let { productsList, cartList } = productsState;
  let cartItemsList = cartList.map((cartItem) => {
    let finalCartItem = productsList.find(
      (proditem) => proditem._id === cartItem.id
    );
    finalCartItem.quantity = cartItem.quantity;
    return finalCartItem;
  });
  return (
    <div className={styles.cart}>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartDetails
          cartItemsList={cartItemsList}
          productsDispatch={productsDispatch}
        />
      )}
    </div>
  );
};

const CartEmpty = () => {
  return <div>Cart is empty...</div>;
};

const CartDetails = ({ cartItemsList, productsDispatch }) => {
  return (
    <>
      <CartPriceCard />
      {cartItemsList.map((item) => {
        const {
          _id,
          name,
          description,
          additionalDetails: { author },
          price,
          images,
          quantity,
          inStock,
        } = item;
        return (
          <CartItemCard
            key={_id}
            id={_id}
            name={name}
            description={description}
            author={author}
            price={price}
            image={images[0]}
            quantity={quantity}
            inStock={inStock}
            productsDispatch={productsDispatch}
          />
        );
      })}
      <div className={styles.btnPlaceOrder}>
        <button>Place Order</button>
      </div>
    </>
  );
};
