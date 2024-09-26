import React from "react";

const QuantityCounter = ({ otherStyles }) => {
  return (
    <>
      <div className={`bg-gray-200 hover:bg-gray-400 cursor-pointer ${otherStyles}`}>
        <i class="fa-solid fa-minus"></i>
      </div>
      <div className={`bg-gray-100 ${otherStyles}`}>
        <span>4</span>
      </div>
      <div className={`bg-gray-200 hover:bg-gray-400 cursor-pointer ${otherStyles}`}>
        <i class="fa-solid fa-plus"></i>
      </div>
    </>
  );
};

export default QuantityCounter;
