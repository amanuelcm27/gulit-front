import React, { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import AdminSideBarItem from "../../components/AdminSideBarItem";
import AdminSideBar from "../../components/AdminSideBar";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import FormField from "../../components/FormField";
import ThemeTemplate from "./ThemeTemplate";

const Theme = () => {
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="w-[45%] h-[600px] overflow-y-scroll">
        <div className="text-center m-2">
          <span className="font-bold text-4xl"> Theme of your store</span>
        </div>
        <div className="flex flex-col  items-center mt-8 ">
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

        <div className="flex flex-col   items-center ">
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
        <div className="flex flex-col   items-center ">
          <div className="flex flex-col h-full  items-center mx-4 ">
            <span className="text-md font-light m-4 ">Right brief description about your business / store , this will be used in your about us page</span>
            <textarea className="h-[200px] p-2 resize-none outline-none w-full border-2 " name="store_description" placeholder="description of your store">

            </textarea>
            <SubmitButton
              name="Continue"
              otherStyles="bg-orange-400 w-full mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col   items-center ">
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
      </div>
      <div className="w-[40%] h-[600px] overflow-y-scroll">
        <div className="text-center m-2">
          <span className="font-light text-xl">your store theme</span>
        </div>
        <ThemeTemplate />
      </div>
    </>
  );
};

export default Theme;
