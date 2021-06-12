import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../contexts/products.context.js";
import "./styles/cards.css";

export const CardOffer = ({
  cardClassName,
  prodURL,
  imgURL,
  title,
  description,
  discount,
  category,
  id,
}) => {
  const { productsDispatch } = useProductsContext();
  const linkto = cardClassName.includes("type1")
    ? `/products/${id}`
    : "/products";
  return (
    <Link
      to={linkto}
      className={`card card-shadow card-img-zoom ${cardClassName}`}
      onClick={() => {
        if (category) {
          productsDispatch({
            type: "FILTER_PRODUCTS",
            payload: `${category}`,
          });
        }
      }}
    >
      <a href={prodURL}>
        <section className="card-img">
          <img src={imgURL} alt="products Offer Img" />
        </section>
        <section className="card-details">
          {title && <div className="card-title">{title}</div>}
          {discount && <div className="card-discount">{discount}</div>}
          {description && <div className="card-description">{description}</div>}
        </section>
      </a>
    </Link>
  );
};
