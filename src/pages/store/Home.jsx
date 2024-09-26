import React from "react";
import NavItem from "../../components/NavItem";
import DropDownItem from "../../components/DropDownItem";
import { useGlobalContext } from "../../context/GlobalProvider";
import images from "../../constants/images";
import Product from "../../components/Product";
import StoreNavBar from "../../components/StoreNavBar";
import StoreFooter from "../../components/StoreFooter";

const Home = () => {
  return (
    <div>
      <StoreNavBar />
      <div className="w-full h-[550px]">
        <div className="max-sm:block flex h-full items-center  max-sm:m-0 m-10 ">
          <div
            style={{ "--image-url": `url(${images.tech})` }}
            className="max-sm:w-full w-1/2  flex flex-col bg-[image:var(--image-url)] bg-cover sm:bg-none  max-sm:h-full  "
          >
            <div className="max-sm:h-full flex flex-col justify-center max-sm:p-4 max-sm:bg-black max-sm:bg-opacity-40 ">
              <span className="max-sm:text-4xl max-sm:text-white text-7xl font-extrabold">
                Prime a drink you would die for
              </span>
              <button className="group active:bg-slate-700 text-left text-white p-5 mt-5 font-extrabold bg-black w-1/2 max-sm:w-full">
                Start Shopping
                <i className="fa-solid fa-cart-shopping opacity-0 group-hover:translate-x-2 group-hover:opacity-100  transition-all duration-300 transform translate-x-[-10px]"></i>
              </button>
            </div>
          </div>
          <div className="max-sm:hidden w-1/2 h-full overflow-hidden rounded-xl ">
            <img
              src={images.tech}
              className="hover:scale-105 transition-all duration-300 object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] max-sm:h-full">
        <div className="text-center m-12">
          <span className="max-sm:text-4xl text-5xl font-extrabold">
            Featured products
          </span>
        </div>
        <div className=" flex max-sm:flex-col max-sm:m-4 m-12 justify-center items-center ">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className=" max-sm:w-full  h-[100px] bg-black hover:bg-gray-900 max-sm:m-0 m-10 mx-16">
        <div className="flex h-full items-center justify-center m-10  text-white">
          <span className="flex-1 max-sm:text-sm text-xl font-extrabold">
            Get this limited time offer
          </span>
          <span className="font-bold  cursor-pointer  hover:translate-x-2 transition-all duration-200">
            Order now <i className="fa-solid fa-angles-right"></i>
          </span>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${images.tech})` }}
        className=" bg-cover h-[550px] rounded-xl max-sm:m-4   m-24 mx-16"
      >
        <div className="w-full h-full flex flex-col justify-end rounded-xl bg-black bg-opacity-60">
          <div className="max-sm:text-4xl text-7xl font-bold text-white mx-10">
            <span>Explore more products </span>
          </div>
          <div className="max-sm:text-lg text-xl text-white font-light mx-10">
            <span>
              we have products curated to your needs discounts will not remain
              for long
            </span>
          </div>
          <div className="group flex hover:bg-gray-900 cursor-pointer bg-black w-1/4 max-sm:w-1/2  max-sm:m-10 max-sm:px-4 m-10 p-4 text-2xl font-bold text-white rounded-lg">
            <span className="flex-1">
              Shop now
              <i className="fa-solid fa-angles-right opacity-0 group-hover:translate-x-2 group-hover:opacity-100  transition-all duration-300 transform translate-x-[-10px]"></i>
            </span>
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default Home;
