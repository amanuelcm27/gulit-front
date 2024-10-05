import React from "react";
import images from "../constants/images";

const LoadingCard = ({ show , styles  , text }) => {
  return (
    <>
      {show && (
        <div className={` absolute ${styles} w-full h-full z-50 bg-white  flex flex-col  items-center justify-center `}>
          <img src={images.loading} className="w-[200px]" />
          <span className="text-2xl  font-bold">Loading {text}</span>
        </div>
      )}
    </>
  );
};

export default LoadingCard;
