import React, { useRef, useState } from "react";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

const StoreThemeForm = ({
  formData,
  handleChange,
  ownsStore,
  updateStore,
  createStore,
}) => {
  const logoInputRef = useRef(null);
  const pimage1Ref = useRef(null);
  const pimage2Ref = useRef(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevioustStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleImageClick = (inputRef) => {
    inputRef.current.click();
  };
  return (
    <>
      {currentStep === 1 && (
        <div className="flex flex-col  mt-8 ">
          <div className="flex flex-col h-full   ">
            <div className="flex flex-col items-center m-4">
              <span
                className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                onClick={() => handleImageClick(logoInputRef)}
              >
                <i className="fa-solid fa-upload"></i>
              </span>
              <input
                type="file"
                className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                placeholder="your store name"
                ref={logoInputRef}
                name="logo"
                onChange={handleChange}
                hidden
              />
              <span className="text-xl font-light ">upload store logo </span>
              <span className="font-extralight">
                (better if you upload logo with background removed)
              </span>
            </div>
            <FormField
              type="text"
              name="name"
              placeholder={`your store name`}
              otherStyles={" m-4 mx-8"}
              value={formData.name}
              handleChange={handleChange}
            />
            <SubmitButton
              name="Continue"
              otherStyles="bg-orange-400  m-4 mx-8"
              handleSubmit={handleNextStep}
            />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex flex-col  mt-8   ">
          <div className="flex flex-col h-full">
            <div className="flex justify-center m-4 ">
              <div className="flex flex-col items-center m-4">
                <span
                  className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                  onClick={() => handleImageClick(pimage1Ref)}
                >
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  type="file"
                  className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                  ref={pimage1Ref}
                  onChange={handleChange}
                  name="p_image_1"
                  hidden
                />
                <span className="text-xl font-light ">product image (1)</span>
              </div>
              <div className="flex flex-col items-center m-4">
                <span
                  className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
                  onClick={() => handleImageClick(pimage2Ref)}
                >
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  type="file"
                  className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
                  ref={pimage2Ref}
                  onChange={handleChange}
                  name="p_image_2"
                  hidden
                />
                <span className="text-xl font-light ">product image (2)</span>
              </div>
            </div>

            <FormField
              type="text"
              name="slogan"
              placeholder={`your store slogan`}
              value={formData.slogan}
              otherStyles={"mx-8"}
              handleChange={handleChange}
            />
            <div className="flex items-center mt-4">
              <SubmitButton
                name="Back"
                back={true}
                otherStyles="w-[40%] mx-4 bg-gray-400 text-black"
                handleSubmit={handlePrevioustStep}
              />
              <SubmitButton
                name="Continue"
                otherStyles="bg-orange-400 w-[60%] mx-4"
                handleSubmit={handleNextStep}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex flex-col  ">
          <div className="flex flex-col h-full mx-4 ">
            <span className="text-md font-light m-4  text-center">
              Right brief description about your business / store , this will be
              used in your about us page
            </span>
            <textarea
              className="h-[300px] p-2 resize-none outline-none border-2 "
              name="description"
              maxLength={1500}
              placeholder="description of your store"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <div className="flex items-center mt-4">
              <SubmitButton
                name="Back"
                back={true}
                otherStyles="w-[40%] mx-2 bg-gray-400 text-black"
                handleSubmit={handlePrevioustStep}
              />
              <SubmitButton
                name={`${ownsStore ? "Update" : "Create"} Store`}
                otherStyles="bg-orange-400 w-[60%] mx-2"
                handleSubmit={
                  ownsStore
                    ? updateStore
                    : () => {
                        createStore(),
                          setTimeout(() => {
                            handleNextStep();
                          }, 2000);
                      }
                }
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="flex flex-col mt-12   items-center ">
          <div className="text-7xl text-orange-400">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="flex flex-col items-center mt-8">
            <span className="text-2xl font-extrabold">
              Store has been setup successfully
            </span>
            <span className="text-xl font-light">
              Add at least 3 products to your store to activate it
            </span>
            <SubmitButton
              handleSubmit={() => navigate("/admin/products")}
              name="Add Products"
              otherStyles="bg-orange-400 w-full mt-2"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default StoreThemeForm;
