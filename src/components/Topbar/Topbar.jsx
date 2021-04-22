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
            FIN-MART
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
            <MdShoppingCart />
          </Link>
          <Link className="" to="/login">
            Login
          </Link>
        </div>
      </div>
      <div className="topbar__search">
        <SearchBox placeholder="Search" />
      </div>
    </div>
  );
};
