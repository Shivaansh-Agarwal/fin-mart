import React from "react";
import styles1 from "./styles/Product.module.css";
import styles2 from "./styles/ProductPrice.module.css";
import { MdShoppingCart } from "react-icons/md";

export const ProductPrice = ({ price, inStock }) => {
  const { discount, discountPercentage, discountedPrice, originalPrice } =
    price;
  const discountPercentageStr = discountPercentage
    ? `(${discountPercentage})`
    : "";
  const inStockString = inStock ? "In Stock" : "Out of Stock";
  const inStockClassName = inStock ? styles2.instock : styles2.outofstock;
  return (
    <div className={styles1.product__price}>
      <div className={styles2.buybox}>
        <div className={styles2.price}>{`₹ ${discountedPrice + ".00"}`}</div>
        <div>
          {`M.R.P.: ₹ `}
          <span className={styles2.mrp}>{originalPrice + ".00"}</span>
        </div>
        <div>{`You Save: ₹ ${discount} ${discountPercentageStr}`}</div>
        <div className={styles2.taxes}>Inclusive of all taxes</div>

        <div className={`${styles2.stock} ${inStockClassName}`}>
          {inStockString}
        </div>

        <div className={styles2.buybox__buttons}>
          <button className={styles2.btnaddtocart} disabled={!inStock}>
            <MdShoppingCart />
            {` Add To Cart`}
          </button>
          <button className={styles2.btnbuynow} disabled={!inStock}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
