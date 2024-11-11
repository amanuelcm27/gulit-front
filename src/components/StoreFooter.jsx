import React from "react";
import images from "../constants/images";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";


const StoreFooter = () => {
  const { id, name, logo } = useStoreContext();
  const navigate = useNavigate();
  return (
    <div className="max-sm:h-auto h-[250px] flex max-sm:flex-col bg-gray-300">
      <div className="m-10 max-sm:m-auto">
        <img src={images.logo} className="w-24" />
      </div>
      <div className="flex flex-col max-sm:m-5 m-10 cursor-pointer">
        <span
          onClick={() => navigate(`/${id}/${name}/home`)}
          className="text-xl p-2 hover:underline font-bold "
        >
          Home
        </span>
        <span onClick={() => navigate(`/${id}/${name}/products`)} className="text-xl p-2 hover:underline font-bold ">Products</span>
        <span onClick={() => navigate("/customer")} className="text-xl p-2 hover:underline font-bold ">
          My account
        </span>
        <span   onClick={() => navigate(`/${id}/${name}/about`)} className="text-xl p-2 hover:underline font-bold ">About</span>
      </div>
      <div className="ml-auto max-sm:mx-7 mt-auto m-10 flex flex-col text-lg  ">
        <span>Follow us</span>
        <span>
          <i className="fa-brands p-1 fa-facebook"></i>
          <i className="fa-brands p-1 fa-instagram"></i>
          <i className="fa-brands p-1 fa-telegram "></i>
        </span>
      </div>
    </div>
  );
};

export default StoreFooter;
