import React from "react";
import { toast } from "react-toastify";
import styles1 from "./styles/ProductPrice.module.css";
import { MdShoppingCart } from "react-icons/md";
import { useProductsContext } from "../../contexts/products.context.js";
import { useNavigate } from "react-router";

export const ProductPrice = ({ id, price, inStock }) => {
  const navigate = useNavigate();
  const { productsState, productsDispatch } = useProductsContext();

  const { discount, discountPercentage, discountedPrice, originalPrice } =
    price;
  const discountPercentageStr = discountPercentage
    ? `(${discountPercentage})`
    : "";
  const inStockString = inStock ? "In Stock" : "Out of Stock";
  const inStockClassName = inStock ? styles1.instock : styles1.outofstock;

  const { cartList } = productsState;
  const isPresentInCart = cartList.find((item) => item.id === id)
    ? true
    : false;
  const btnCartText = isPresentInCart ? " Open Cart" : " Add To Cart";

  function cartHandler() {
    if (isPresentInCart) {
      navigate("/cart");
    } else {
      productsDispatch({
        type: "ADD_TO_CART",
        payload: id,
      });
      toast.info("Book Added to Cart 😃", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className={styles1.product__price}>
      <div className={styles1.buybox}>
        <div className={styles1.price}>{`₹ ${discountedPrice + ".00"}`}</div>
        <div>
          {`M.R.P.: ₹ `}
          <span className={styles1.mrp}>{originalPrice + ".00"}</span>
        </div>
        <div>{`You Save: ₹ ${discount} ${discountPercentageStr}`}</div>
        <div className={styles1.taxes}>Inclusive of all taxes</div>

        <div className={`${styles1.stock} ${inStockClassName}`}>
          {inStockString}
        </div>

        <div className={styles1.buybox__buttons}>
          <button
            className={styles1.btnaddtocart}
            disabled={!inStock}
            onClick={cartHandler}
          >
            <MdShoppingCart />
            {btnCartText}
          </button>
          {/* <button className={styles1.btnbuynow} disabled={!inStock}>
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
};
