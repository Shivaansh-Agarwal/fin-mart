import React from "react";
import { CardProductItem } from "../Cards";
import "./grid.css";

export const Grid = ({ productsList }) => {
  return (
    <div className="grid-products">
      {productsList.map((item) => {
        return (
          <div key={item._id} className="prod-grid-card-wrapper">
            <CardProductItem item={item} />
          </div>
        );
      })}
    </div>
  );
};
