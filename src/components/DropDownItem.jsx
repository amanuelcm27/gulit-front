import React from "react";
import images from "../constants/images";

const DropDownItem = ({name , icon, handleClick , additional   }) => {
  return (
    <div onClick={handleClick}  className="flex items-center p-2 hover:bg-orange-400 hover:text-white transition-all duration-100 ease-in cursor-pointer">
      <i className={icon}></i>
      <span className="p-3">{name}
        <div className="text-sm text-gray-400">{additional === true && additional}</div>

      </span>
    </div>
  );
};

export default DropDownItem;
