import React from "react";
import images from "../constants/images";

const Product = ({
  setFormData,
  handleClick,
  showEditButton,
  product: { name, price, discount, image, rating, category },
  showPrice = true,
}) => {
  return (
    <div
      onClick={handleClick}
      className=" max-sm:w-full w-1/4 h-[450px]  m-2 border-[1px] rounded-t-lg flex flex-col items-center transition-all duration-200 cursor-pointer hover:bg-gray-200 overflow-hidden"
    >
      <img
        src={image}
        className="w-full h-2/3 object-cover hover:scale-105  transition-all duration-200 "
      />
      <div className=" w-full flex flex-col items-center mt-4 ">
        <span className="text-gray-500">{category}</span>
        <span className="font-bold text-2xl truncate w-90% text-center">
          {name}
        </span>
        <span className="text-orange-400">
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
        </span>
        {showPrice && <span>
          <span className="text-gray-400 line-through ">{discount}</span>
          <span className="text-gray-600 px-2">{price}</span>
        </span>}
        {showEditButton && <span
          onClick={setFormData}
          className={`${ "ml-auto px-4 hover:text-red-500"}`}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </span>}
      </div>
    </div>
  );
};

export default Product;
