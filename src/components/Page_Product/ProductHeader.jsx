import React from "react";
import StarRatings from "react-star-ratings";
import styles from "./styles/ProductHeader.module.css";

export const ProductHeader = ({ name, description, author, ratings }) => {
  const { avgRatings, totalRatings } = ratings;
  return (
    <header className={styles.product__header}>
      <div className={styles.product__name}>
        {name}
        <span className={styles.product__bookbinding}>{description}</span>
      </div>
      <div className={styles.product__author}>{author}</div>
      <div className={styles.product__ratings}>
        <StarRatings
          rating={avgRatings}
          numberOfStars={5}
          starRatedColor="#FFA41C"
          name="rating"
          starDimension="1.2rem"
          starSpacing="0px"
        />
        <span className={styles["product--totalRatings"]}>
          {`${totalRatings.toLocaleString("en-US")} ratings`}
        </span>
      </div>
    </header>
  );
};
