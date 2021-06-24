import React from "react";
import styles from "./styles/CartItem.module.css";
import { MdDelete } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { ProductCartQuantity } from "../../components";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const navigateToProductPage = () => {
    navigate(`/products/${id}`);
  };
  const { discountPercentage, discountedPrice, originalPrice } = price;
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <div className={styles.cartImage} onClick={navigateToProductPage}>
          <img src={image} alt="Product in Cart" />
        </div>
        <div className={styles.cartRight}>
          <div className={styles.bookname} onClick={navigateToProductPage}>
            {name}
          </div>
          <div className={styles.bookauthor}>{author}</div>
          <div className={styles.bookbinding}>{description}</div>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{`₹${discountedPrice}`}</span>
            <span className={styles.mrp}>{`₹${originalPrice}`}</span>
            <span className={styles.discount}>{discountPercentage}</span>
          </div>
          <ProductCartQuantity
            id={id}
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
