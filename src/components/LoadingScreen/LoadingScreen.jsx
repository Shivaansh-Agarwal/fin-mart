import React from "react";
import "./loadingScreen.css";
import { RingLoader } from "react-spinners";

export const LoadingScreen = ({ showLoadingScreen }) => {
  const props = {
    loading: true,
    size: 30,
    color: "black",
    css: `
        display: block;
        margin: 0 auto;
    `,
  };
  return (
    <>
      {showLoadingScreen && (
        <div className="loading-screen">
          <RingLoader {...props} />
        </div>
      )}
    </>
  );
};
