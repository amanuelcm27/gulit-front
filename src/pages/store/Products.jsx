import React from "react";
import StoreNavBar from "../../components/StoreNavBar";
import Product from "../../components/Product";
import StoreFooter from "../../components/StoreFooter";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate()
  return (
    <div>
      <StoreNavBar />
      <div className=" max-sm:m-1 m-10 relative">
        <div className="absolute z-10 bg-white bg-opacity-95 max-sm:w-full w-1/4 h-full">
          <div className="flex flex-col m-8">
            <span className="ml-auto">
              <i className="fa-solid fa-close"></i>
            </span>
            <span className="font-bold">Filter by price</span>

            <input
              type="text"
              className="p-4 border-2 border-black"
              placeholder="search for products"
            />
            <SubmitButton
              otherStyles={`bg-black mt-2`}
              name={`Apply filters`}
            />
          </div>
        </div>
        <div className="h-[80px] flex items-center p-2 bg-gray-100">
          <div className="p-2 hover:bg-gray-200 cursor-pointer">
            <i className="fa-solid fa-list"></i> Filter
          </div>
          <div className="p-2">
            <span> Showing 1-6 of 20 results</span>
          </div>
        </div>

        <div className="flex  flex-wrap justify-center p-2">
          <div className="flex flex-wrap justify-center">
            <Product handleClick={()=>navigate('/product')} />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

          <div className=" flex  items-center max-sm:mx-8 mx-28 font-light ">
            <button className=" m-2 max-sm:p-2 hover:bg-gray-200   p-4 rounded-lg">
              Previous
            </button>
            <span className="m-2">2 of 20</span>
            <button className=" m-2 max-sm:p-2 hover:bg-gray-200   px-8 p-4 rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default Products;
