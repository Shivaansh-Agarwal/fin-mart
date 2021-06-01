import React from "react";
import "./styles/cards.css";
import { BadgeProduct, BadgeRating } from "../Badges";
import { ButtonLike } from "../Buttons";

export const CardProductItem = ({ item }) => {
  const {
    additionalDetails,
    badge,
    created_at,
    description,
    images,
    inStock,
    links,
    name,
    price,
    ratings,
    updated_at,
    _id,
  } = item;
  const {
    author,
    countryOfOrigin,
    dimensions,
    isbn10,
    isbn13,
    language,
    pages,
    publisher,
    weight,
  } = additionalDetails;
  const { showBadge, tagName } = badge;
  const { discount, discountPercentage, discountedPrice, originalPrice } =
    price;
  const { avgRatings, totalRatings } = ratings;
  let badgeBackgroundColor = "pink";
  let badgeColor = "white";
  if (tagName === "NATIONAL BESTSELLER") {
    badgeBackgroundColor = "green";
    badgeColor = "white";
  } else if (tagName === "WORLDWIDE BESTSELLER") {
    badgeBackgroundColor = "#FFA500";
    badgeColor = "white";
  }
  return (
    <div className={`card card-shadow prod-card`}>
      <div className="prod-card-top">
        <div className="btn-wishlist-wrapper">
          <ButtonLike />
        </div>
        {showBadge && (
          <div className="prod-badge-wrapper">
            <BadgeProduct
              tag={tagName}
              backgroundColor={badgeBackgroundColor}
              color={badgeColor}
            />
          </div>
        )}
        <div className={`card-img`}>
          <img src={images[0]} alt="" />
        </div>
        <div className="prod-card-rating-wrapper">
          <BadgeRating rating={avgRatings} />
        </div>
      </div>
      <div className={`prod-card-details`}>
        <div className={`card-title`}>{name}</div>
        <div className={`card-description`}>{`by ${author}`}</div>
        <div className={`card-price`}>
          <span className="card-price-curr">Rs. {discountedPrice}</span>
          {discount && (
            <>
              <span className="card-price-orig">Rs.{` ${originalPrice}`}</span>
              <span className="card-discountPercentage">
                {discountPercentage}
              </span>
            </>
          )}
        </div>
      </div>
      <div className={`prod-card-buttons`}></div>
    </div>
  );
};
