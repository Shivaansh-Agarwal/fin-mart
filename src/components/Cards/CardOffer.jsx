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
}) => {
  const { productsDispatch } = useProductsContext();
  return (
    <Link
      to="/products"
      className={`card card-shadow card-img-zoom ${cardClassName}`}
      onClick={() => {
        productsDispatch({ type: `FILTER_BY_${category}` });
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
