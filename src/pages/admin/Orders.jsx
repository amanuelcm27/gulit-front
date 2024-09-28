import React, { useState } from "react";
import AdminProductCard from "../../components/AdminProductCard";
import images from "../../constants/images";

const Orders = () => {
  const [expandOrder, setExpandOrder] = useState(false);
  return (
    <>
      <div className="w-[85%] h-[600px] ">
        <div className="h-full overflow-y-scroll">
          <div className=" border-b-2 flex m-8 items-center">
            <span className="flex-1 font-bold text-2xl">
              Orders from customers
            </span>
            <div className="relative group rounded-lg m-2 cursor-pointer p-2">
              <i className="fa-solid fa-caret-down"></i> Filter
              <div className="opacity-0 pointer-events-none  group-hover:pointer-events-auto group-hover:opacity-100 absolute flex flex-col right-0 w-[200px] bg-gray-200  rounded-md ">
                <span className=" hover:bg-gray-100 p-2">Latest</span>
                <span className=" hover:bg-gray-100 p-2">Oldest</span>
                <span className=" hover:bg-gray-100 p-2">Near delivery</span>
              </div>
            </div>
          </div>
          <span className="mx-4 font-extralight">200 orders </span>
          <AdminProductCard
            title="expand"
            icon={`fa-solid fa-expand`}
            status={`#50 Orders`}
            styles={`font-light`}
            handleClick={() => setExpandOrder(!expandOrder)}
          />
        </div>
      </div>
      {expandOrder && <div className="absolute flex justify-center items-center right-0 w-full h-[600px] bg-white bg-opacity-75">
        <div className="w-[40%] h-[500px] overflow-y-scroll  bg-white shadow-custom border-2 rounded-md">
          <div className="m-4 flex font-bold items-center">
            <span className="flex-1">Customers ordering this product</span>{" "}
            <i
              onClick={() => setExpandOrder(!expandOrder)}
              class="fa-regular hover:scale-110 cursor-pointer fa-circle-xmark"
            ></i>
          </div>
          <div className="relative group flex p-4 items-center bg-gray-50 cursor-pointer hover:bg-gray-100">
            <img src={images.tech} className="w-16 rounded-[50%] " />
            <span>John mccahon</span>
            <div className="absolute flex flex-col z-20 right-0 top-0 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto bg-gray-100 w-[300px] border-2">
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-bookmark p-2"></i>Ordered : 10 product
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-location-dot p-2"></i>5th street maryland
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-hashtag p-2"></i>order-id : 233
              </span>
            </div>
          </div>
          <div className="relative group flex p-4 items-center bg-gray-50 cursor-pointer hover:bg-gray-100">
            <img src={images.tech} className="w-16 rounded-[50%] " />
            <span>John mccahon</span>
            <div className="absolute flex flex-col z-20 right-0 top-0 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto bg-gray-100 w-[300px] border-2">
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-bookmark p-2"></i>Ordered : 10 product
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-location-dot p-2"></i>5th street maryland
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-hashtag p-2"></i>order-id : 233
              </span>
            </div>
          </div>
          <div className="relative group flex p-4 items-center bg-gray-50 cursor-pointer hover:bg-gray-100">
            <img src={images.tech} className="w-16 rounded-[50%] " />
            <span>John mccahon</span>
            <div className="absolute flex flex-col z-20 right-0 top-0 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto bg-gray-100 w-[300px] border-2">
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-bookmark p-2"></i>Ordered : 10 product
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-location-dot p-2"></i>5th street maryland
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-hashtag p-2"></i>order-id : 233
              </span>
            </div>
          </div>{" "}
          <div className="relative group flex p-4 items-center bg-gray-50 cursor-pointer hover:bg-gray-100">
            <img src={images.tech} className="w-16 rounded-[50%] " />
            <span>John mccahon</span>
            <div className="absolute flex flex-col z-20 right-0 top-0 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto bg-gray-100 w-[300px] border-2">
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-bookmark p-2"></i>Ordered : 10 product
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-location-dot p-2"></i>5th street maryland
              </span>
              <span className="p-2 font-bold w-full truncate">
                <i class="fa-solid fa-hashtag p-2"></i>order-id : 233
              </span>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Orders;
