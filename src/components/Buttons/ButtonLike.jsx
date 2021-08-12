import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import "./buttonLike.css";

export const ButtonLike = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const classActive = "like-active";
  const classInactive = "like-inactive";
  function updateLikeStatus() {
    setLikeStatus((currStatus) => !currStatus);
  }
  return (
    <div className="like-wrapper">
      <span
        className={`btn-like ${likeStatus ? classActive : classInactive}`}
        onClick={updateLikeStatus}
        onKeyPress={updateLikeStatus}
        role="button"
        tabIndex="0"
      >
        <MdFavorite />
      </span>
    </div>
  );
};
