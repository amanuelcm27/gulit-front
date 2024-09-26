import React from "react";
import images from "../constants/images";

const Product = ({handleClick}) => {
  return (
    <div onClick={handleClick} className=" max-sm:w-full w-1/4 h-[450px]  m-2 border-[1px] rounded-t-lg flex flex-col items-center transition-all duration-200 cursor-pointer hover:bg-gray-200 overflow-hidden">
      <img
        src={images.tech}
        className="w-full h-2/3 object-cover hover:scale-105  transition-all duration-200 "
      />
      <div  className=" w-full flex flex-col items-center mt-4 ">
        <span className="text-gray-500">Category</span>
        <span className="font-bold text-2xl truncate w-90% text-center">Product Name is some thing</span>
        <span className="text-orange-400">
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
        </span>
        <span>
          <span className="text-gray-400 line-through ">$46.99</span>
          <span className="text-gray-600 px-2">$25.99</span>
        </span>
      </div>
    </div>
  );
};

export default Product;
