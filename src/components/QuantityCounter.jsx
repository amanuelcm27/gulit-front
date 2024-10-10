import React, { useState } from "react";

const QuantityCounter = ({ quantity , setQuantity,    otherStyles }) => {

  const decrement = () => {
    setQuantity((prev) => prev === 1 ? 1 : prev - 1)
  }
  const increment = () => {
    setQuantity((prev) => prev  + 1)
  }
  return (
    <>
      <div onClick={decrement} className={`bg-gray-200 hover:bg-gray-400 cursor-pointer ${otherStyles}`}>
        <i class="fa-solid fa-minus"></i>
      </div>
      <div className={`bg-gray-100 ${otherStyles}`}>
        <span>{quantity}</span>
      </div>
      <div onClick={increment} className={`bg-gray-200 hover:bg-gray-400 cursor-pointer ${otherStyles}`}>
        <i class="fa-solid fa-plus"></i>
      </div>
    </>
  );
};

export default QuantityCounter;
