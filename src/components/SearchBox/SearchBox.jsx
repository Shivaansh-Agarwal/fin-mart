import React from "react";
import "./searchbox.css";

export const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="searchbox"
      onChange={onChangeHandler}
    />
  );
};

/**
 * Look at the following articles for making a suggestive searchbox
 * https://programmingwithmosh.com/react/simple-react-autocomplete-component/
 * https://react-autosuggest.js.org/
 * react-autosuggest library
 * https://codepen.io/collection/DkkYaQ
 */
