import React from "react";
import "./styles/cards.css";

export const CardOffer = ({
  cardClassName,
  prodURL,
  imgURL,
  title,
  description,
  discount,
}) => {
  return (
    <div className={`card card-shadow card-img-zoom ${cardClassName}`}>
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
    </div>
  );
};
