import React from "react";
import images from "../constants/images";

const DropDownItem = ({name , icon, handleClick ,   }) => {
  return (
    <div onClick={handleClick}  className="flex items-center p-2 hover:bg-orange-400 hover:text-white transition-all duration-100 ease-in cursor-pointer">
  <i className={icon}></i>

      <span className="p-3">{name}</span>
    </div>
  );
};

export default DropDownItem;