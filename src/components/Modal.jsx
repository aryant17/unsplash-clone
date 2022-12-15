import React from "react";
import Header from "./Header";

const Modal = ({ imageURL }) => {
  return (
    <div>
      <Header />

      <div className="">
        <img src={imageURL} style={{height: "400px", width: "auto"}} alt="" />
      </div>
    </div>
  );
};

export default Modal;
