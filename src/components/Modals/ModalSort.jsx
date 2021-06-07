import React from "react";
import Modal from "react-modal";
import { useProductsContext } from "../../contexts/products.context.js";
import "./modals.css";

import { MdClose } from "react-icons/md";

const ModalListItem = ({
  productsDispatch,
  dispatchType,
  sortBy,
  displayName,
}) => {
  let sortByType = dispatchType === "SORT_RELEVANCE" ? null : dispatchType;
  return (
    <li className="modal__list_item_radio">
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() => {
            productsDispatch({ type: dispatchType });
          }}
          checked={sortBy === sortByType}
        />
        {displayName}
      </label>
    </li>
  );
};

export const ModalSort = ({ isOpen, setIsOpen }) => {
  const { productsState, productsDispatch } = useProductsContext();
  const { sortBy } = productsState;
  const sortingList = [
    { dispatchType: "SORT_RELEVANCE", displayName: "Relevance" },
    { dispatchType: "SORT_NAME_A_Z", displayName: "Name: A-Z" },
    { dispatchType: "SORT_NAME_Z_A", displayName: "Name: Z-A" },
    {
      dispatchType: "SORT_PRICE_LOW_TO_HIGH",
      displayName: "Price: Low To High",
    },
    {
      dispatchType: "SORT_PRICE_HIGH_TO_LOW",
      displayName: "Price: High To Low",
    },
  ];
  return (
    <Modal isOpen={isOpen} style={modalStyle}>
      <div className="modal__heading">Sort By</div>
      <ul className="modal__list">
        {sortingList.map(({ dispatchType, displayName }, index) => {
          return (
            <ModalListItem
              productsDispatch={productsDispatch}
              dispatchType={dispatchType}
              sortBy={sortBy}
              displayName={displayName}
              key={index}
            />
          );
        })}
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
