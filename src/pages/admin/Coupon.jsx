import React, { useState } from "react";
import AdminProductCard from "../../components/AdminProductCard";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";

const Coupon = () => {
  const [expandOrder, setExpandOrder] = useState(false);
  const [deleteBox, setDeleteBox] = useState(false);
  return (
    <>
      <div className="w-[85%] h-[600px] ">
        <div className="h-full overflow-y-scroll">
          <div className=" border-b-2 flex m-8 items-center">
            <span className="flex-1 font-bold text-2xl">
              Products with Coupons
            </span>
            <span
              onClick={() => setExpandOrder(!expandOrder)}
              className="hover:bg-gray-200  rounded-lg m-2 cursor-pointer p-2"
            >
              <i className="fa-solid fa-plus"></i> New Coupon
            </span>
          </div>
          <AdminProductCard
            title="delete"
            icon={`fa-solid fa-trash hover:text-red-700`}
            status={`Active`}
            styles={`text-green-500 font-extrabold`}
            handleClick={() => setDeleteBox(!deleteBox)}
          />
        </div>
      </div>
      {expandOrder && (
        <div className="absolute flex justify-center items-center right-0 w-full h-[600px] bg-white bg-opacity-75">
          <div className="w-[40%] h-[500px] overflow-y-scroll  bg-white shadow-custom border-2 rounded-md">
            <div className="m-4 flex font-bold items-center">
              <span className="flex-1">Add a coupon</span>
              <i
                onClick={() => setExpandOrder(!expandOrder)}
                class="fa-regular hover:scale-110 cursor-pointer fa-circle-xmark"
              ></i>
            </div>
            <div className="flex flex-col m-4 ">
              <FormField placeholder="coupon code" type="text" />
              <div className="m-2">
                <span>Product this coupon to be applied on:</span>
                <div className="relative group flex flex-col bg-gray-100  cursor-pointer">
                  <div className="flex p-2 hover:bg-gray-200">
                    <span className="flex-1">Choose a product</span>
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                  <div className="absolute top-10  flex-col pointer-events-none hidden group-hover:flex group-hover:pointer-events-auto  right-0 w-full bg-gray-100 border-t-2 h-[100px] overflow-y-scroll">
                    <span className=" p-2 hover:bg-gray-300">All products</span>
                    <span className=" p-2 hover:bg-gray-300">Product 1</span>
                  </div>
                </div>
              </div>
              <div className="flex m-2 items-center">
                <span>
                  Expires after
                  <input
                    className="bg-gray-200 mx-2 text-right appearance-none outline-none "
                    type="number"
                    name="expiry"
                  />
                  days
                </span>
              </div>
              <div className="flex flex-col m-2 justify-center">
                <span>Discount amount (in %) : </span>
                <FormField type="number" placeholder="in percentage (%)" />
              </div>
              <div className="flex mt-12">
                <SubmitButton
                  otherStyles={`bg-green-400 mx-2 w-full`}
                  name={`save & add another`}
                />
                <SubmitButton
                  otherStyles={`bg-orange-400 w-full`}
                  name={`Save Coupon`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteBox && (
        <div className="absolute flex justify-center items-center right-0 w-full h-[600px] bg-white bg-opacity-75">
          <div className="w-[40%] h-[200px] border-red-400 flex flex-col shadow-custom border-2 rounded-md">
            <div className="m-4 flex font-bold">
              <span className="flex-1">Are you sure to delete this coupon</span>
              <i
                onClick={() => setDeleteBox(!deleteBox)}
                class="fa-regular hover:scale-110 cursor-pointer fa-circle-xmark"
              ></i>
            </div>
            <div className="flex flex-col m-4 h-full">
              <div className="flex w-full ">
                <span className="w-1/2 flex-1 truncate ">Product name</span>
                <span className="text-green-600">coupon name</span>
              </div>
              <div className="flex mt-auto">
                <SubmitButton handleSubmit={()=>setDeleteBox(!deleteBox)} name={`Cancel`} otherStyles="bg-green-400 rounded-full" />
                <SubmitButton name={`I'm Sure`} otherStyles=" mx-2 rounded-full bg-red-400" />
              </div> 
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coupon;
