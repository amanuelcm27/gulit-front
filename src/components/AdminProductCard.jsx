import React from "react";
import images from "../constants/images";

const AdminProductCard = ({ title, icon, status, handleClick, styles }) => {
  return (
    <div className="m-4 flex flex-col ">
      <div className="flex items-center h-[100px] border-2 hover:bg-gray-50 ">
        <img src={images.tech} className="w-24 h-full" />
        <div className="flex flex-col">
          <span>Product name</span>
          <span className={` ${styles}`}>{status} </span>
        </div>
        <div
          onClick={handleClick}
          className=" cursor-pointer ml-auto mx-4 hover:scale-110 "
        >
          <span>
            <i title={title} class={icon}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
