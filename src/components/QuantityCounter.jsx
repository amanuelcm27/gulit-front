import React, { useState } from "react";

const QuantityCounter = ({ quantity , setQuantity,    otherStyles  , max_quantity}) => {

  const decrement = () => {
    setQuantity((prev) => prev === 1 ? 1 : prev - 1)
  }
  const increment = () => {
    setQuantity((prev) => prev === max_quantity  ? max_quantity  : prev +  1)
  }
  return (
    <>
      <button onClick={decrement} className={`bg-gray-200 hover:bg-gray-400  outline-none ${otherStyles}`}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <div className={`bg-gray-100 ${otherStyles}`}>
        <span>{quantity}</span>
      </div>
      <button onClick={increment} className={`bg-gray-200 hover:bg-gray-400 outline-none ${otherStyles}`}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </>
  );
};

export default QuantityCounter;
