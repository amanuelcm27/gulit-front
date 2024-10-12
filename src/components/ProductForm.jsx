import React, { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import { createObjectURLIfObject } from "../utils/createObjectUrl";
import { apiRequest } from "../handlers/apiHandler";
import SubmitButton from "./SubmitButton";
import images from "../constants/images";

const ProductForm = ({
  formData,
  handleChange,
  editMode,
  setEditMode,
  setProductForm,
  updateProduct,
  createProduct,
}) => {
  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const fetchCategories = async () => {
    const response = await apiRequest("get", "categories/");
    if (response.success === false) {
      console.log("Error in getting categories");
    } else {
      setCategories(response);
    }
  };
  const setCategory = (category) => {
    handleChange({
      target: {
        type: "text",
        name: "category",
        value: category,
      },
    });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="h-full">
      <span className="font-bold text-4xl m-10">{editMode ? 'Edit' : 'Add'} your Product</span>

      <div className="flex">
        <div className="w-1/2 h-full flex-col m-10">
          <button
            onClick={() => {
              setEditMode(false), setProductForm(false);
            }}
            className="mx-4 p-2 rounded-xl active:bg-gray-200 bg-gray-100"
          >
            <i className="fa-solid fa-angles-left"></i> <span>Back</span>
          </button>
          <FormField
            name="name"
            placeholder=" name"
            type={"text"}
            value={formData.name}
            handleChange={handleChange}
          />
          <div className="flex w-full items-center">
            <FormField
              name="price"
              type="number"
              otherStyles="w-1/2"
              placeholder="discounted price"
              value={formData.price}
              handleChange={handleChange}
            />
            <FormField
              name="discount"
              type="number"
              placeholder="original price"
              otherStyles="w-1/2 mx-2"
              value={formData.discount}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full bg-gray-200 relative group mt-8  p-4 ">
            <div className="flex">
              <span className="flex-1 font-light">
                {formData.category || "Choose a category"}
              </span>
              <span className="cursor-pointer">
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
            <div className="absolute pointer-events-none hidden group-hover:flex group-hover:pointer-events-auto  flex-col top-14 right-0 z-10 cursor-pointer w-full h-[200px] overflow-y-scroll bg-gray-100">
              {categories.map((category) => (
                <span
                  key={category}
                  onClick={() => setCategory(category)}
                  className="p-4 font-light hover:bg-gray-300 "
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <textarea
            className="w-full h-[200px] p-4 resize-none outline-none border-b-2"
            placeholder="product description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <FormField
            placeholder="available quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            handleChange={handleChange}
          />
          {editMode ? (
            <SubmitButton
              handleSubmit={() => updateProduct(formData.id)}
              name="Save Changes"
              otherStyles={`bg-orange-400 w-full mt-2`}
            />
          ) : (
            <div className="flex">
              <SubmitButton
                name="Save & Add another"
                otherStyles={`bg-black mx-2 mt-2 w-full`}
                handleSubmit={() => createProduct("save&add")}
              />
              <SubmitButton
                handleSubmit={createProduct}
                name="Finish"
                otherStyles={`bg-orange-400 w-full mt-2`}
              />
            </div>
          )}
        </div>
        <div className="w-1/2 h-[600px]">
          <div className="flex flex-col justify-center items-center">
            <span
              className="text-7xl  text-orange-400 cursor-pointer hover:text-orange-200"
              onClick={handleImageClick}
            >
              <i className="fa-solid fa-image"></i>
            </span>
            <input
              type="file"
              className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 text-center `}
              placeholder="your store name"
              ref={fileInputRef}
              name="image"
              onChange={handleChange}
              hidden
            />
            <span>upload product picture</span>
            <span className="font-light text-center">
              if possible try to upload picture with solid background so it
              looks good on your store frontpage like the image below
            </span>
          </div>

          <img
            src={
              (formData.image && createObjectURLIfObject(formData.image)) ||
              images.brand
            }
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
