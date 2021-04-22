import React from "react";
import "./badge.css";

export const BadgeCount = function ({ count, backgroundColor, color }) {
  return (
    <div className="badge badge-count" style={{ backgroundColor, color }}>
      {count}
    </div>
  );
};
