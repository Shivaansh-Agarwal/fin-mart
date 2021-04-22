import React from "react";
import Modal from "react-modal";
import "./modals.css";

import { MdClose } from "react-icons/md";

export const ModalSort = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} style={modalStyle}>
      <div className="modal__heading">Sort By</div>
      <label>
        <input
          type="radio"
          name="sort"
          checked={sortBy === "HIGH_TO_LOW"}
          onChange={() => {
            dispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
          }}
        />
      </label>
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
