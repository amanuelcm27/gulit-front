import React, { useRef, useState } from "react";
import FormField from "../../components/FormField";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import Product from "../../components/Product";

const StoreProducts = () => {
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const [showProductForm, setProductForm] = useState(false);
  return (
    <div className="w-[85%] h-[600px] ">
      {showProductForm && (
        <div className="h-full">
          <span className="font-bold text-4xl m-10">Add your Product</span>
          <div className="flex">
            <div className="w-1/2 h-full flex-col m-10">
              <FormField name="name" placeholder=" name" />
              <div className="flex w-full items-center">
                <FormField
                  name="price"
                  type="number"
                  otherStyles="w-1/2"
                  placeholder=" price"
                />
                <FormField
                  name="discount"
                  type="number"
                  placeholder=" discount"
                  otherStyles="w-1/2 mx-2"
                />
              </div>
              <div className="w-full bg-gray-200 relative group mt-8  p-4 ">
                <div className="flex">
                  <span className="flex-1">Choose a Category</span>
                  <span className="cursor-pointer">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </div>
                <div className="absolute pointer-events-none hidden group-hover:flex group-hover:pointer-events-auto  flex-col top-14 right-0 z-10 cursor-pointer w-full h-[200px] overflow-y-scroll bg-gray-100">
                  <span className="p-4 font-light hover:bg-gray-300 ">
                    Electronics
                  </span>
                  <span className="p-4 font-light hover:bg-gray-300 ">
                    Electronics
                  </span>
                  <span className="p-4 font-light hover:bg-gray-300 ">
                    Electronics
                  </span>
                  <span className="p-4 font-light hover:bg-gray-300 ">
                    Electronics
                  </span>
                </div>
              </div>
              <textarea
                className="w-full h-[200px] p-4 resize-none outline-none border-b-2"
                placeholder="product description"
              ></textarea>
              <FormField placeholder="available quantity" type="number" />
              <SubmitButton
                name="Save & Add another"
                otherStyles={`bg-black mt-2 w-full`}
              />
              <SubmitButton
                handleSubmit={() => setProductForm(false)}
                name="Finish"
                otherStyles={`bg-orange-400 w-full mt-2`}
              />
            </div>
            <div className="w-1/2 h-full">
              <div className="flex flex-col justify-center items-center">
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
                <span>upload product picture</span>
                <span className="font-light text-center">
                  if possible try to upload picture with solid background so it
                  looks good on your store frontpage like the image below
                </span>
              </div>

              <img src={images.brand} className="w-full h-full " />
            </div>
          </div>
        </div>
      )}
      {!showProductForm && (
        <div className=" h-full overflow-y-scroll">
          <div className=" border-b-2 flex m-8 items-center">
            <span className="flex-1 font-bold text-2xl">
              Availabe products in your store
            </span>
            <span
              onClick={() => setProductForm(true)}
              className="hover:bg-gray-200 rounded-lg m-2 cursor-pointer p-2"
            >
              <i className="fa-solid fa-plus"></i> New Product
            </span>
          </div>
          <div className="flex flex-wrap justify-center h-full ">
            <Product edit={true} />
            <Product edit={true} />
            <Product edit={true} />
            <Product edit={true} />
            <Product edit={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreProducts;
