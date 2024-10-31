import React, { useEffect, useState } from "react";
import useFormHandler from "../../handlers/useFormHandler";
import FormField from "../../components/FormField";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import { apiRequest } from "../../handlers/apiHandler";
import { useNavigate, useParams } from "react-router-dom";
import LoadingCard from "../../components/LoadingCard";
import InfoCard from "../../components/InfoCard";
import EmptyCard from "../../components/EmptyCard";

const Checkout = () => {
  const { storeid, store_name } = useParams();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [infokey, setInfoKey] = useState(0);
  const [couponForm, setCouponForm] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponUsed , setCouponUsed] = useState(false);
  const [formData, handleChange, setFormData, clearForm] = useFormHandler({
    store_id: storeid,
    coupon_code: "",
    cart_id: cart?.id,
  });
  const navigate = useNavigate();
  const fetchCart = async () => {
    const response = await apiRequest("get", `cart_items/${storeid}/`);
    if (response.success === false) {
      setInfo("Couldn't load cart items");
      setError(true);
    } else {
      setCart(response);
      setLoading(false);
    }
  };
  const createOrder = async () => {
    const response = await apiRequest("post", `create_order/`, {
      store_id: storeid,
      cart_id: cart?.id,
      coupon_used: couponUsed,
    });
    if (response.success === false) {
      setInfo("Couldn't create order");
      setError(true);
    } else {
      setError(false);
      setInfo("Order created successfully");
      setLoading(false);
      setTimeout(() => {
        navigate(`/${storeid}/${store_name}/cart`);
      }, 2000);
    }
    setInfoKey(infokey + 1);
  };
  const validateCouponForm = () => {
    if (formData.coupon_code === "") {
      setError(true);
      setInfo("Enter coupon code");
      return false;
    }
    return formData;
  };
  const applyCoupon = async () => {
    const validatedFormData = validateCouponForm();
    if (validatedFormData) {
      setCouponLoading(true);
      const response = await apiRequest(
        "post",
        "apply_coupon/",
        validatedFormData
      );
      if (response.success === false) {
        setCouponLoading(false);
        setInfo(response.error?.data?.message);
        setError(true);
      } else {
        setCouponUsed(validatedFormData.coupon_code);
        setCouponLoading(false);
        setError(false);
        setInfo("Coupon code successful");
        setCart(response);
      }
    }
    setInfoKey(infokey + 1);
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      cart: cart,
    }));
  }, [cart]);
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <InfoCard info={info} iserror={error} infokey={infokey} />
      <div className="border-2 max-sm:h-auto h-[600px]">
        <div className="flex max-sm:flex-col m-8 max-sm:m-2">
          <div className="w-[50%] max-sm:w-full ">
            <span className="text-4xl max-sm:text-2xl font-extrabold">
              Billing information
            </span>
            <div className="flex items-center">
              <FormField
                name={`fname`}
                type={`text`}
                otherStyles={`max-sm:m-1 m-4 w-full`}
                placeholder={`first name ...`}
              />
              <FormField
                name={`lname`}
                type={`text`}
                otherStyles={`max-sm:m-1 m-4 w-full`}
                placeholder={`Last name ...`}
              />
            </div>
            <FormField
              name={`address`}
              type={`email`}
              otherStyles={`max-sm:m-1 m-4`}
              placeholder={`Email...`}
            />
            <div className="flex items-center">
              <FormField
                name={`postal`}
                type={`text`}
                otherStyles={`max-sm:m-1 m-4 w-full`}
                placeholder={`Postal code`}
              />
              <FormField
                name={`city`}
                type={`text`}
                otherStyles={`max-sm:m-1 m-4 w-full`}
                placeholder={`City / Town...`}
              />
            </div>
            <div className="p-2 max-sm: flex flex-col">
              <span className="text-xl font-bold">Payment Methods</span>
              <SubmitButton
                handleSubmit={createOrder}
                name="Pay with Chapa"
                otherStyles="m-4 max-sm:m-1 bg-green-400 p-4 rounded-md font-extrabold text-white"
              />

              <span className="text-center border-t-2 mx-4">or</span>
              <SubmitButton
                name="Pay with Stripe"
                otherStyles="m-4 bg-black max-sm:m-1 p-4 rounded-md font-extrabold text-white"
              />
            </div>
          </div>
          <div className=" w-1/2 flex flex-col h-[550px] max-sm:w-full relative ">
            <LoadingCard text="Orders" show={loading} />
            <span className="p-8 max-sm:text-2xl max-sm:text-center font-extrabold text-4xl">
              Your Orders
            </span>
            <div className="overflow-y-scroll">
              {cart.items?.length > 0 ? (
                cart.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center h-[100px] mt-2"
                  >
                    <div className="flex-1 flex items-center ">
                      <img
                        src={item.product.image}
                        className="w-24 max-sm:w-16 rounded-lg"
                      />
                      <span className=" p-2 font-bold text-xl w-1/2 truncate">
                        {item.product.name}
                      </span>
                    </div>
                    <div className="flex m-4 items-center ">
                      <span className="m-8 max-sm:m-1 font-bold">
                        x{item.quantity}
                      </span>
                      <span className="m-4 font-light">
                        {item.product.price}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-xl my-4"> No, Items in your Cart </span>
                  <SubmitButton
                    name="Add Products"
                    otherStyles="bg-black w-1/4 rounded-xl"
                    handleSubmit={() =>
                      navigate(`/${storeid}/${store_name}/products`)
                    }
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col mt-auto m-4">
              <div className="flex text-2xl font-bold">
                <span className="flex-1">Total</span>
                <span className="">{cart?.total_price}</span>
              </div>
              <div className=" m-2 max-sm:m-1">
                <span
                  onClick={() => setCouponForm(!couponForm)}
                  className="cursor-pointer hover:text-gray-700"
                >
                  Have a coupon/promo code ?
                </span>
                {couponForm && (
                  <div>
                    <FormField
                      name="coupon_code"
                      type="text"
                      placeholder="Your promo code"
                      handleChange={handleChange}
                      value={formData.coupon_code}
                    />
                    {couponLoading ? (
                      <img src={images.loading} className="w-28" />
                    ) : (
                      <button
                        onClick={applyCoupon}
                        className="bg-black text-white p-4 m-2 rounded-lg"
                      >
                        Apply coupon
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
