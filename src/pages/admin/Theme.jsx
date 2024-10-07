import React, { useEffect, useRef, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import FormField from "../../components/FormField";
import ThemeTemplate from "./ThemeTemplate";
import useFormHandler from "../../handlers/useFormHandler";
import { Form, useNavigate } from "react-router-dom";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import images from "../../constants/images";
import LoadingCard from "../../components/LoadingCard";
import { usecheckStoreOwnership } from "../../handlers/checkOwnership";
const Theme = () => {
  const logoInputRef = useRef(null);
  const pimage1Ref = useRef(null);
  const pimage2Ref = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [store, setStore] = useState(null);
  const [formData, handleChange, setFormData] = useFormHandler({
    name: store?.name || "",
    logo: store?.logo || null,
    slogan: store?.slogan || "",
    p_image_1: store?.p_image_1 || null,
    p_image_2: store?.p_image_2 || null,
    description: store?.description || "",
  });
  const navigate = useNavigate();
  const handleImageClick = (inputRef) => {
    inputRef.current.click();
  };
  const formValid = () => {
    const requiredFields = [
      "name",
      "slogan",
      "description",
      "logo",
      "p_image_1",
      "p_image_2",
    ];
    const isEmpty = requiredFields.some((field) => !formData[field]);

    if (isEmpty) {
      setInfo("All fields are required");
      setError(true);
      return false;
    }

    const data = new FormData();
    requiredFields.forEach((field) => {
      const value = formData[field];
      if (["logo", "p_image_1", "p_image_2"].includes(field)) {
        if (typeof value !== "string") {
          data.append(field, value); // only add it to the returned data if it's a file
        }
      } else {
        // Append all other fields
        data.append(field, value);
      }
    });

    return data;
  };
  const createStore = async () => {
    const validatedData = formValid();
    if (validatedData) {
      const response = await apiRequest("post", "store_create/", validatedData);
      if (response.success === false) {
        setInfo("Error in creating store");
      } else {
        setInfo("Store has been created");
        setTimeout(() => {
          handleNextStep();
        }, 2000);
      }
    }
  };

  const updateStore = async () => {
    const validatedData = formValid();

    const response = await apiRequest(
      "patch",
      `update_store/${store?.id}/`,
      validatedData
    );
    if (response.success === false) {
      setInfo("Cannot update store data");
      setError(true);
    } else {
      setInfo("Store has been updated");
      setError(false);
    }
  };
  const createObjectURLIfObject = (value) => {
    if (value && typeof value === "object") {
      return URL.createObjectURL(value);
    }
    return value;
  };
  const [
    ownsStore,
    loading,
    error,
    info,
    setInfo,
    setError,
    setLoading,
    setOwnsStore,
  ] = usecheckStoreOwnership(setStore);

  useEffect(() => {
    if (store) {
      setFormData({
        name: store.name || "",
        logo: store.logo || null,
        slogan: store.slogan || "",
        p_image_1: store.p_image_1 || null,
        p_image_2: store.p_image_2 || null,
        description: store.description || "",
      });
    }
  }, [store]);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevioustStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <>
      <InfoCard info={info} iserror={error} />
      <div className="w-[45%] h-[600px] overflow-y-scroll relative">
        <LoadingCard text="theme" show={loading} />
        <div className="text-center m-2">
          <span className="font-bold text-4xl">
            {ownsStore ? "Edit" : "Setup"} your store
          </span>
        </div>
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
                Right brief description about your business / store , this will
                be used in your about us page
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
                  handleSubmit={ownsStore ? updateStore : createStore}
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
      </div>
      <div className="w-[40%] h-[600px] overflow-y-scroll relative">
        <LoadingCard text="theme" show={loading} />

        <div className="text-center m-2 flex flex-col">
          <span className="font-light text-lg">your store theme </span>
          <span className="font-extralight">scroll to see more </span>
        </div>
        <ThemeTemplate
          logo={createObjectURLIfObject(formData.logo)}
          slogan={formData.slogan}
          header={createObjectURLIfObject(formData.p_image_1)}
          bottomImage={createObjectURLIfObject(formData.p_image_2)}
        />
      </div>
    </>
  );
};

export default Theme;
