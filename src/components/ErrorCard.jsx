import React from "react";
import images from "../constants/images";

const ErrorCard = ({ otherStyles, error ,setAuthError}) => {
  return (
    <div
      className={`${otherStyles} max-sm:w-full  bg-orange-400 text-white flex items-center`}
    >
      <img src={images.close} onClick={()=>setAuthError(null)} className="w-5" />
      <span className=" p-1">{error}</span>
    </div>
  );
};

export default ErrorCard;
