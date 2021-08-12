import React from "react";
import iconStar from "./assets/icon-star.svg";
import "./badge.css";

export const BadgeRating = function ({ rating, backgroundColor, color }) {
  return (
    <div className="badge badge-rating" style={{ backgroundColor, color }}>
      <span>{rating}</span>
      <img src={iconStar} alt="star" className="badge-star" />
    </div>
  );
};
