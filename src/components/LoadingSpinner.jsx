import React from "react";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="grid grid-cols-1 place-items-center text-center m-10">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
