import React, { useEffect, useRef, useState } from "react";
import FormField from "../../components/FormField";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import Product from "../../components/Product";
import useFormHandler from "../../handlers/useFormHandler";
import InfoCard from "../../components/InfoCard";
import { apiRequest } from "../../handlers/apiHandler";

const StoreProducts = () => {
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const [categories, setCategories] = useState([]);
  const [showProductForm, setProductForm] = useState(true);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  const [formData, handleChange , clearForm] = useFormHandler({
    name: "",
    price: "",
    discount: "",
    description: "",
    category: "",
    quantity: "",
    image: null,
  });

  const formValid = () => {
    const requiredFields = [
      "name",
      "price",
      "discount",
      "quantity",
      "description",
      "category",
      "image",
    ];
    const isEmpty = requiredFields.some((field) => !formData[field]);

    if (isEmpty) {
      console.log(formData);
      setInfo("All fields are required");
      setError(true);
      return false;
    }

    const data = new FormData();
    requiredFields.forEach((field) => data.append(field, formData[field]));

    return data;
  };
  const createProduct = async () => {
    const validatedData = formValid();
    if (validatedData) {
      const response = await apiRequest(
        "post",
        "product_create/",
        validatedData
      );
      if (response.success === false) {
        setInfo("Error in creating product");
        setError(true);
      } else {
        setInfo("Product has been created");
        setError(false);
        setTimeout(() => {
          setProductForm(false);
        }, 2000);
      }
    }
  };
  const fetchCategories = async () => {
    const response = await apiRequest("get", "categories/");
    if (response.success === false) {
      setInfo("Network Error Try again later");
      setError(true);
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
  }
  
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="w-[85%] h-[600px] ">
      <InfoCard iserror={error} info={info} />
      {showProductForm && (
        <div className="h-full">
          <span className="font-bold text-4xl m-10">Add your Product</span>
          <div className="flex">
            <div className="w-1/2 h-full flex-col m-10">
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
                  placeholder=" price"
                  value={formData.price}
                  handleChange={handleChange}
                />
                <FormField
                  name="discount"
                  type="number"
                  placeholder=" discount"
                  otherStyles="w-1/2 mx-2"
                  value={formData.discount}
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full bg-gray-200 relative group mt-8  p-4 ">
                <div className="flex">
                  <span className="flex-1 font-light">{formData.category || "Choose a category"}</span>
                  <span className="cursor-pointer">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </div>
                <div className="absolute pointer-events-none hidden group-hover:flex group-hover:pointer-events-auto  flex-col top-14 right-0 z-10 cursor-pointer w-full h-[200px] overflow-y-scroll bg-gray-100">
                  {categories.map((category) => (
                    <span key={category} onClick={()=>setCategory(category)} className="p-4 font-light hover:bg-gray-300 ">
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
              <div className="flex">
                <SubmitButton
                  name="Save & Add another"
                  otherStyles={`bg-black mx-2 mt-2 w-full`}
                  handleSubmit={clearForm}
                />
                <SubmitButton
                  handleSubmit={createProduct}
                  name="Finish"
                  otherStyles={`bg-orange-400 w-full mt-2`}
                />
              </div>
            </div>
            <div className="w-1/2 h-full">
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
                  (formData.image && URL.createObjectURL(formData.image)) ||
                  images.brand
                }
                className="w-full h-full "
              />
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
