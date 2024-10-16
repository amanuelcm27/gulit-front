import React, { useEffect, useState } from "react";
import AdminProductCard from "../../components/AdminProductCard";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";
import useFormHandler from "../../handlers/useFormHandler";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
const Coupon = () => {
  const [couponForm, setExpandCouponForm] = useState(false);
  const [deleteBox, setDeleteBox] = useState(false);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState("");
  const [error, setError] = useState(false);
  const [infokey, setInfoKey] = useState(0);
  const [formData, handleChange , clearForm] = useFormHandler({
    code: "",
    discount: "",
    product: null,
    days: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const fetchProducts = async () => {
    const response = await apiRequest("get", "list_products/");
    if (response.success === false) {
      setError(true);
    } else {
      setProducts(response);
    }
  };
  const formValid = () => {
    if (
      formData.code === "" ||
      formData.discount === "" 
    ) {
      setInfo(" coupon code and discount are required fields"); 
      setError(true);
      return false;
    }
    return formData;
  };
  const createCoupon = async () => {
    const validatedData = formValid();
    if (validatedData) {
      const response = await apiRequest("post", "create_coupon/", validatedData);
      if (response.success === false) {
        console.log(response);
        setError(true);
        setInfo("Error in creating coupon ensure you have not used this code before");
        console.log(response);
      } else {
        setInfo("Coupon has been created");

        console.log(response);
      }
    }

    setInfoKey(infokey + 1);
  };
  const setProduct = (product) => {
    handleChange({
      target: {
        type: "text",
        name: "product",
        value: product.id,
      },
    });
    setSelectedProduct(product.name);
  };
  const fetchCoupons = async () => {  
    const response = await apiRequest("get", "coupons/");
    if (response.success === false) {
      setError(true);
      setInfo("Error in fetching coupons");
    } else {
      setInfo("Coupons fetched successfully");
      console.log(response);
    }
    setInfoKey(infokey + 1);
  }
  useEffect(() => {
    fetchProducts();
    fetchCoupons();
  }, []);
  return (
    <>
      <InfoCard info={info} iserror={error} infokey={infokey} />
      <div className="w-[85%] h-[600px] ">
        <div className="h-full overflow-y-scroll">
          <div className=" border-b-2 flex m-8 items-center">
            <span className="flex-1 font-bold text-2xl">
              Products with Coupons
            </span>
            <span
              onClick={() => setExpandCouponForm(!couponForm)}
              className="hover:bg-gray-200  rounded-lg m-2 cursor-pointer p-2"
            >
              <i className="fa-solid fa-plus"></i> New Coupon
            </span>
          </div>
          <AdminProductCard
            title="delete"
            icon={`fa-solid fa-trash hover:text-red-700`}
            info={`Active`}
            styles={`text-green-500 font-extrabold`}
            handleClick={() => setDeleteBox(!deleteBox)}
          />
        </div>
      </div>
      {couponForm && (
        <div className="absolute flex justify-center items-center right-0 w-full h-[600px] bg-white bg-opacity-75">
          <div className="w-[40%] h-[500px] overflow-y-scroll  bg-white shadow-custom border-2 rounded-md">
            <div className="m-4 flex font-bold items-center">
              <span className="flex-1">Add a coupon</span>
              <i
                onClick={() => setExpandCouponForm(!couponForm)}
                class="fa-regular hover:scale-110 cursor-pointer fa-circle-xmark"
              ></i>
            </div>
            <div className="flex flex-col m-4 ">
              <FormField
                placeholder="coupon code"
                type="text"
                name="code"
                value={formData.code}
                handleChange={handleChange}
              />
              <div className="m-2">
                <span>Product this coupon to be applied on:</span>
                <div className="text-gray-500 text-sm my-2">by default its for  all products in particular cart</div>
                <div className="relative group flex flex-col bg-gray-100  cursor-pointer">
                  <div className="flex p-2 hover:bg-gray-200">
                    <span className="flex-1">
                      {selectedProduct || "Choose a product "}
                    </span>
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                  <div className="absolute top-10  flex-col pointer-events-none hidden group-hover:flex group-hover:pointer-events-auto  right-0 w-full bg-gray-100 border-t-2 h-[100px] overflow-y-scroll">
                    <span
                      onClick={() =>
                        setSelectedProduct("All products in a cart")
                      }
                      className=" p-2 hover:bg-gray-300"
                    >
                      All products in a cart
                    </span>
                    {products?.map((product) => (
                      <span
                        key={product.id}
                        onClick={() => setProduct(product)}
                        className="p-2 hover:bg-gray-300"
                      >
                       For {product.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex m-2 items-center">
                <span>
                  Expires after
                  <input
                    className="bg-gray-200 mx-2 text-right appearance-none outline-none "
                    type="number"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                  />
                  days
                  <span className="text-gray-500">
                    (the default is 15 days)
                  </span>
                </span>
              </div>
              <div className="flex flex-col m-2 justify-center">
                <span>Discount amount (in %) : </span>
                <FormField
                  type="number"
                  name="discount"
                  placeholder="in percentage (%)"
                  value={formData.discount}
                  handleChange={handleChange}
                />
              </div>
              <div className="flex mt-12">
                <SubmitButton
                  handleSubmit={() =>{ createCoupon() , clearForm() }}
                  otherStyles={`bg-green-400 mx-2 w-full`}
                  name={`save & add another`}
                />
                <SubmitButton
                  handleSubmit={() => {createCoupon() , setExpandCouponForm(!couponForm)}}
                  otherStyles={`bg-orange-400 w-full`}
                  name={`Save Coupon`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteBox && (
        <div className="absolute flex justify-center items-center right-0 w-full h-[600px] bg-white bg-opacity-75">
          <div className="w-[40%] h-[200px] border-red-400 flex flex-col shadow-custom border-2 rounded-md">
            <div className="m-4 flex font-bold">
              <span className="flex-1">Are you sure to delete this coupon</span>
              <i
                onClick={() => setDeleteBox(!deleteBox)}
                class="fa-regular hover:scale-110 cursor-pointer fa-circle-xmark"
              ></i>
            </div>
            <div className="flex flex-col m-4 h-full">
              <div className="flex w-full ">
                <span className="w-1/2 flex-1 truncate ">Product name</span>
                <span className="text-green-600">coupon name</span>
              </div>
              <div className="flex mt-auto">
                <SubmitButton
                  handleSubmit={() => setDeleteBox(!deleteBox)}
                  name={`Cancel`}
                  otherStyles="bg-green-400 rounded-full"
                />
                <SubmitButton
                  name={`I'm Sure`}
                  otherStyles=" mx-2 rounded-full bg-red-400"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coupon;
