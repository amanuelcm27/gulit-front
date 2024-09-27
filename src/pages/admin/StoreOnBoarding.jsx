import React, { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import AdminSideBarItem from "../../components/AdminSideBarItem";
import AdminSideBar from "../../components/AdminSideBar";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import FormField from "../../components/FormField";

import { useNavigate } from "react-router-dom";
import ThemeTemplate from "./ThemeTemplate";
const StoreOnBoarding = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const [storeData, setStoreData] = useState();
  return (
    <div>
      <NavBar />
      <div className="m-4 h-full flex">
        <AdminSideBar />
        <div className="w-[85%] h-[600px] ">
            <div className="flex flex-col h-full justify-center items-center">
                <img  src={images.welcome} className="h-1/2"/>
                <span className="text-4xl font-extrabold">WELCOME TO YOUR STORE</span>
                <span className="text-xl font-light">Seems like this is your first time start by telling us about your business</span>
                <SubmitButton handleSubmit={()=>navigate('/')} name="Let's Begin" otherStyles="bg-orange-400 w-1/2 mt-2" />
            </div>
        </div>
        {/* <div className="w-[45%] h-[600px]">
          <div className="text-center m-2">
            <span className="font-bold text-4xl"> Theme of your store</span>
          </div>
          <div className="flex flex-col h-full  items-center mt-8">
            <div className="flex flex-col h-full  items-center ">
              <span
                className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                onClick={handleImageClick}
              >
                <i class="fa-solid fa-image"></i>
              </span>
              <input
                type="file"
                className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                placeholder="your store name"
                ref={fileInputRef}
                hidden
              />
              <span className="text-xl font-light ">upload store logo</span>
              <FormField
                type="text"
                name="logo"
                placeholder={`your store name`}
              />

              <SubmitButton
    
                name="Continue"
                otherStyles="bg-orange-400 w-full mt-2"
              />
            </div>
          </div>

          <div className="flex flex-col h-full  items-center mt-8">
            <div className="flex flex-col h-full  items-center ">
              <div className="flex items-center">
                <div className="flex flex-col items-center m-4">
                  <span
                    className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                    onClick={handleImageClick}
                  >
                    <i class="fa-solid fa-image"></i>
                  </span>
                  <input
                    type="file"
                    className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                    placeholder="your store name"
                    ref={fileInputRef}
                    hidden
                  />
                  <span className="text-xl font-light ">product image (1)</span>
                </div>
                <div className="flex flex-col items-center m-4">
                  <span
                    className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                    onClick={handleImageClick}
                  >
                    <i class="fa-solid fa-image"></i>
                  </span>
                  <input
                    type="file"
                    className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                    placeholder="your store name"
                    ref={fileInputRef}
                    hidden
                  />
                  <span className="text-xl font-light ">product image (2)</span>
                </div>
              </div>

              <FormField
                type="text"
                name="logo"
                placeholder={`your store slogan`}
              />

              <SubmitButton
    
                name="Continue"
                otherStyles="bg-orange-400 w-full mt-2"
              />
            </div>
          </div>
          <div className="flex flex-col h-full  items-center mt-8">
            <div className="text-7xl text-orange-400">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div className="flex flex-col items-center mt-8">
              <span className="text-2xl font-extrabold">
                Store has been setup successfully 
              </span>
              <span className="text-xl font-light">
                Add some products to you store before publishing it
              </span>
              <SubmitButton
    
                name="Add Products"
                otherStyles="bg-orange-400 w-full mt-2"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="w-[40%] h-[600px] overflow-y-scroll">
          <ThemeTemplate />
        </div> */}
      </div>
    </div>
  );
};

export default StoreOnBoarding;
