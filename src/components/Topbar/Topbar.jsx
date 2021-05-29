import React from "react";
import { Link } from "react-router-dom";

import { SearchBox } from "../SearchBox/SearchBox.jsx";

import { MdShoppingCart } from "react-icons/md";
import "./topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__buttons">
        <div className="topbar__buttons__left">
          <Link className="topbar__logo" to="/">
            <svg height="30" width="200">
              <text x="0" y="25" className="topbar__logo_svg">
                Fin Mart
              </text>
            </svg>
          </Link>
        </div>
        <div className="topbar__buttons__right">
          <Link className="" to="/products">
            Products
          </Link>
          <Link className="" to="/wishlist">
            Wishlist
          </Link>
          <Link className="" to="/cart">
            <MdShoppingCart /> Cart
          </Link>
          <Link className="" to="/login">
            Log In
          </Link>
        </div>
      </div>
      <div className="topbar__search">
        <SearchBox placeholder="Search" />
      </div>
    </div>
  );
};
