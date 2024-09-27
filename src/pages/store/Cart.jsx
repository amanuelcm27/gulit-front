import React from "react";
import StoreNavBar from "../../components/StoreNavBar";
import StoreFooter from "../../components/StoreFooter";
import images from "../../constants/images";
import QuantityCounter from "../../components/QuantityCounter";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div>
      <StoreNavBar />
      <div className=" m-10 max-sm:m-4 ">
        <div className="flex max-sm:w-full max-sm:flex-col max-sm:h-auto h-[550px] ">
          <div className="w-[65%] max-sm:w-full overflow-y-scroll  ">
            <span className="font-bold text-xl m-4 max-sm:m-2">Your Cart</span>
            <div className=" max-sm:hidden flex justify-end items-center  h-[50px] mx-4  bg-gray-50 hover:bg-gray-100   ">
              <div className="flex items-center gap-10  ">
                <span className="">Price</span>
                <div className="flex">
                  <span>Quantity</span>
                </div>
                <span className="font-light">Sub-total</span>
              </div>
            </div>

            <div className="max-sm:hidden flex items-center  h-[100px] mx-4  bg-gray-50 hover:bg-gray-100 p-2 rounded-md ">
              <div className="flex-1  flex items-center ">
                <i class="text-xl fa-solid fa-circle-xmark"></i>
                <img src={images.tech} className="w-16 h-full m-2" />
                <div className="font-bold w-1/2 truncate">Product Name</div>
              </div>
              <div className="flex items-center gap-10 b ">
                <span className="">$20.54</span>
                <div className="flex">
                  <div className="bg-gray-200 hover:bg-gray-400 cursor-pointer p-2">
                    <i class="fa-solid fa-minus"></i>
                  </div>
                  <div className="bg-gray-100 p-2">
                    <span>4</span>
                  </div>
                  <div className="bg-gray-200 hover:bg-gray-400 cursor-pointer p-2">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
                <span className="font-light">$20.54</span>
              </div>
            </div>
            <div className="sm:hidden flex flex-col items-center w-full p-2 ">
              <span className="ml-auto">
                <i class="text-xl fa-solid fa-circle-xmark"></i>
              </span>
              <img src={images.tech} className="w-28" />
              <span className="text-xl w-1/2 truncate text-center">
                Product NameNameNameName
              </span>
              <div className="flex w-full m-4">
                <span>500</span>
                <span className="ml-auto">Price</span>
              </div>
              <div className="flex w-full m-4">
                <QuantityCounter otherStyles={`p-2`} />
                <span className="ml-auto">Quantity</span>
              </div>
              <div className="flex w-full m-4">
                <span>500</span>
                <span className="ml-auto">Sub-Total</span>
              </div>
            </div>
            <div className="sm:hidden flex flex-col items-center w-full p-2 ">
              <span className="ml-auto">
                <i class="text-xl fa-solid fa-circle-xmark"></i>
              </span>
              <img src={images.tech} className="w-28" />
              <span className="text-xl w-1/2 truncate text-center">
                Product NameNameNameName
              </span>
              <div className="flex w-full m-4">
                <span>500</span>
                <span className="ml-auto">Price</span>
              </div>
              <div className="flex w-full m-4">
                <QuantityCounter otherStyles={`p-2`} />
                <span className="ml-auto">Quantity</span>
              </div>
              <div className="flex w-full m-4">
                <span>500</span>
                <span className="ml-auto">Sub-Total</span>
              </div>
            </div>
          </div>
          <div className="w-[35%] max-sm:w-full">
            <div className="flex flex-col m-4 ">
              <span className="font-bold border-b-2">Cart Summary</span>
              <div className="flex m-4 border-b-2">
                <span className="flex-1">Sub-total</span>
                <span className="">450</span>
              </div>
              <div className="flex m-4 border-b-2">
                <span className="flex-1">Total</span>
                <span className="">450</span>
              </div>
              <SubmitButton
                name={`Proceed to Checkout`}
                otherStyles="bg-black"
                handleSubmit={()=>navigate('/checkout')}
              />
            </div>
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default Cart;
