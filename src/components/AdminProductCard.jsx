import React from "react";
import images from "../constants/images";

const AdminProductCard = ({ product_name, product_image , info, additional, title, icon, status, handleClick, styles }) => {
  return (
    <div className="m-4 flex flex-col max-sm:border-2 max-sm:rounded-lg max-sm:p-4 max-sm:m-2  ">
      <div className="flex max-sm:flex-col items-center h-[100px]  max-sm:h-auto hover:bg-gray-50 ">
        <img src={product_image} className="w-24 h-full" />
        <div className="flex flex-col max-sm:items-center mx-4">
          <span>{product_name}</span>
          <span className={` ${styles} max-sm:text-center`}>{info} </span>
          <span className="text-sm max-sm:text-center text-gray-500">{additional}</span>
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
