import React from "react";
import styles from "./styles/CartItem.module.css";
import { MdDelete } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { ProductCartQuantity } from "../../components";

export const CartItemCard = ({
  id,
  name,
  description,
  quantity,
  image,
  author,
  price,
  inStock,
  productsDispatch,
}) => {
  const { discountPercentage, discountedPrice, originalPrice } = price;
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <div className={styles.cartImage}>
          <img src={image} alt="Product in Cart" />
        </div>
        <div className={styles.cartRight}>
          <div className={styles.bookname}>{name}</div>
          <div className={styles.bookauthor}>{author}</div>
          <div className={styles.bookbinding}>{description}</div>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{`₹${discountedPrice}`}</span>
            <span className={styles.mrp}>{`₹${originalPrice}`}</span>
            <span className={styles.discount}>{discountPercentage}</span>
          </div>
          <ProductCartQuantity
            quantity={quantity}
            productsDispatch={productsDispatch}
          />
        </div>
      </div>
      <div className={styles.cartbuttons}>
        <button>
          <IoHeart />
          <span className={styles.moveToWishlist}>MOVE to WISHLIST</span>
        </button>
        <button>
          <MdDelete />
          <span className={styles.remove}>REMOVE</span>
        </button>
      </div>
    </div>
  );
};
