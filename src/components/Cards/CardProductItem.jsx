import React from "react";
import "./styles/cards.css";
import { BadgeProduct, BadgeRating } from "../Badges";
import { ButtonLike } from "../Buttons";

export const CardProductItem = ({ item }) => {
  const { productName, productDesc, author } = item.details;
  const {
    publisher,
    language,
    pages,
    dimensions,
    isbn10,
    isbn13,
  } = item.additionalDetails;
  const {
    currPrice,
    mrp,
    discount,
    discountText,
    discountAmount,
    discountBadgeBgColor,
  } = item.price;
  const { avgRatings } = item.ratings;
  const { tagName, badgeBgColor, showBadge } = item.badge;
  const { imgURL } = item.images;
  const { amazon: amazonLink } = item.links;
  return (
    <div className={`card card-shadow prod-card`}>
      <div className="prod-card-top">
        <div className="btn-wishlist-wrapper">
          <ButtonLike />
        </div>
        {showBadge && (
          <div className="prod-badge-wrapper">
            <BadgeProduct tag={tagName} backgroundColor={badgeBgColor} />
          </div>
        )}
        <div className={`card-img`}>
          <img src={imgURL} alt="" />
        </div>
        <div className="prod-card-rating-wrapper">
          <BadgeRating rating={avgRatings} />
        </div>
      </div>
      <div className={`prod-card-details`}>
        <div className={`card-title`}>{productName}</div>
        <div className={`card-description`}>{`by ${author}`}</div>
        <div className={`card-price`}>
          <span className="card-price-curr">Rs. {currPrice}</span>
          {discount && (
            <>
              <span className="card-price-orig">Rs.{` ${mrp}`}</span>
              <span className="card-discountPercentage">{discountText}</span>
            </>
          )}
        </div>
      </div>
      <div className={`prod-card-buttons`}></div>
    </div>
  );
};
