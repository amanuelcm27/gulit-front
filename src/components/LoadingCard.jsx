import React from "react";
import images from "../constants/images";

const LoadingCard = ({ show }) => {
  return (
    <>
      {show && (
        <div className="absolute w-full h-full z-50 bg-white bg-opacity-85 flex flex-col  items-center justify-center enter">
          <img src={images.loading} className="w-[200px]" />
          <span className="text-2xl  font-bold">Loading Theme</span>
        </div>
      )}
    </>
  );
};

export default LoadingCard;
