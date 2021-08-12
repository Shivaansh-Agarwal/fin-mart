import React from "react";
import Modal from "react-modal";
import { useProductsContext } from "../../contexts/products.context.js";
import "./modals.css";

import { MdClose } from "react-icons/md";

export const ModalFilter = ({ isOpen, setIsOpen }) => {
  const { productsState, productsDispatch } = useProductsContext();
  const { filterBy } = productsState;
  return (
    <Modal isOpen={isOpen} style={modalStyle}>
      <div className="modal__heading">Filter By</div>
      <ul className="modal__list">
        <li className="modal__list_item_radio">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                productsDispatch({
                  type: "FILTER_PRODUCTS",
                  payload: "MUTUAL_FUNDS",
                });
              }}
              checked={filterBy.includes("MUTUAL_FUNDS")}
            />
            Mutual Funds
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                productsDispatch({
                  type: "FILTER_PRODUCTS",
                  payload: "STOCKS",
                });
              }}
              checked={filterBy.includes("STOCKS")}
            />
            Stocks
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                productsDispatch({
                  type: "FILTER_PRODUCTS",
                  payload: "PERSONAL_FINANCE",
                });
              }}
              checked={filterBy.includes("PERSONAL_FINANCE")}
            />
            Personal Finance
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                productsDispatch({
                  type: "FILTER_PRODUCTS",
                  payload: "REAL_ESTATE",
                });
              }}
              checked={filterBy.includes("REAL_ESTATE")}
            />
            Real Estate
          </label>
        </li>
      </ul>
      <button
        className="modal__close"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <MdClose size="1.5rem" />
      </button>
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: "hsla(0,0%,6.7%,0.8)",
    zIndex: 1000,
  },
  content: {
    position: "absolute",
    maxHeight: "10rem",
    width: "12rem",
    margin: "auto",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "1rem",
  },
};
