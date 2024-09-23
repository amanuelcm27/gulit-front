import React from "react";
import images from "../constants/images";

const DropDownItem = ({name , icon, logout  }) => {
  return (
    <div onClick={logout}  className="flex items-center p-2 hover:bg-orange-400 hover:text-white transition-all duration-100 ease-in cursor-pointer">
      <img className="w-8" src={icon} />
      <span className="p-3">{name}</span>
    </div>
  );
};

export default DropDownItem;
