import React from "react";
import "./button.css";

export const Button = ({ displayText, onClickHandler, type }) => {
  return (
    <button className={`btn ${type}`} onClick={onClickHandler}>
      {displayText}
    </button>
  );
};
