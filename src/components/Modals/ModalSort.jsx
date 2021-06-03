import React from "react";
import Modal from "react-modal";
import { useProductsContext } from "../../contexts/products.context.js";
import "./modals.css";

import { MdClose } from "react-icons/md";

export const ModalSort = ({ isOpen, setIsOpen }) => {
  const { productsState, productsDispatch } = useProductsContext();
  const { sortBy } = productsState;
  return (
    <Modal isOpen={isOpen} style={modalStyle}>
      <div className="modal__heading">Sort By</div>
      <ul className="modal__list">
        <li className="modal__list_item_radio">
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => {
                productsDispatch({ type: "SORT_RELEVANCE" });
              }}
              checked={sortBy === null}
            />
            Relevance
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => {
                productsDispatch({ type: "SORT_NAME_A_Z" });
              }}
              checked={sortBy === "SORT_NAME_A_Z"}
            />
            Name: A-Z
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => {
                productsDispatch({ type: "SORT_NAME_Z_A" });
              }}
              checked={sortBy === "SORT_NAME_Z_A"}
            />
            Name: Z-A
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => {
                productsDispatch({ type: "SORT_PRICE_LOW_TO_HIGH" });
              }}
              checked={sortBy === "SORT_PRICE_LOW_TO_HIGH"}
            />
            Price: Low To High
          </label>
        </li>
        <li className="modal__list_item_radio">
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => {
                productsDispatch({ type: "SORT_PRICE_HIGH_TO_LOW" });
              }}
              checked={sortBy === "SORT_PRICE_HIGH_TO_LOW"}
            />
            Price: High To Low
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
