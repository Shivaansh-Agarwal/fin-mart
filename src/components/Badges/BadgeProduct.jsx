import React from "react";
import "./badge.css";

export const BadgeProduct = function ({ tag, backgroundColor, color }) {
  return (
    <div className="badge badge-product" style={{ backgroundColor, color }}>
      {tag.toUpperCase()}
    </div>
  );
};
