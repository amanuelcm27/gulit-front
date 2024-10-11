import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import QuantityCounter from "../../components/QuantityCounter";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";
import EmptyCard from "../../components/EmptyCard";
import CartItemMobile from "../../components/CartItemMobile";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const { storeid, store_name } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [infokey, setInfoKey] = useState(0); // re-trigger effect for infocard
  const [error, setError] = useState(false);
  const [cart, setCart] = useState({});

  const removeFromCart = async (itemId) => {
    setLoading(true);
    const response = await apiRequest("delete", `delete_cart_item/${itemId}/`);
    if (response.success === false) {
      setInfo("Error in removing item from cart");
      setError(true);
      setLoading(false);
    } else {
      setLoading(false);
      setInfo("Item removed from cart");
      fetchCart();
    }
    setInfoKey(infokey + 1);
  };
  const fetchCart = async () => {
    const response = await apiRequest("get", `cart_items/${storeid}`);
    if (response.success === false) {
      setInfo("Couldn't load cart items");
      setError(true);
    } else {
      setLoading(false);
      setCart(response);
    }
  };
  const updateQuantity = async (itemId, quantity, operation) => {
    const updatedQuantity =
      operation === "incr" ? quantity + 1 : Math.max(quantity - 1, 1);
    if (operation !== "incr" && quantity === 1) {
      return;
    }
    setLoading(true);
    const response = await apiRequest("patch", `update_cart_item/${itemId}/`, {
      quantity: updatedQuantity,
    });
    if (response.success === false) {
      setInfo("Error in updating quantity");
      setError(true);
    } else {
      setLoading(false);
      setInfo("Quantity updated");
      fetchCart();
    }
    setInfoKey(infokey + 1);
  };
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <InfoCard info={info} iserror={error} infokey={infokey} />
      <div className=" m-10 max-sm:m-4  ">
        <div className="flex max-sm:w-full max-sm:flex-col max-sm:h-auto h-[550px] ">
          <div className="w-[65%] max-sm:w-full overflow-y-scroll relative  ">
            <LoadingCard text="Cart" show={loading} />
            <span className="font-bold text-xl m-4 max-sm:m-2">Your Cart</span>
            <div className=" max-sm:hidden flex justify-end items-center  h-[50px] mx-4 px-4 bg-gray-50 hover:bg-gray-100   ">
              <div className="flex items-center gap-10  ">
                <span className="">Price</span>
                <div className="flex">
                  <span>Quantity</span>
                </div>
                <span className="font-light">Sub-total</span>
              </div>
            </div>

            {cart.items?.length >= 1 ? (
              cart.items?.map((item) => (
                <CartItem
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  storeid={storeid}
                  store_name={store_name}
                />
              ))
            ) : (
              <EmptyCard
                styles="h-[70%] max-sm:hidden"
                text="Your Cart is empty"
                btext="Add products"
                handleClick={() =>
                  navigate(`/${storeid}/${store_name}/products`)
                }
              />
            )}

            {cart.items?.length >= 1 ? (
              cart.items?.map((item) => (
                <CartItemMobile
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))
            ) : (
              <EmptyCard
                styles={`sm:hidden`}
                text="Your Cart is empty"
                btext="Add products"
                handleClick={() =>
                  navigate(`/${storeid}/${store_name}/products`)
                }
              />
            )}
          </div>
          <div className="w-[35%] max-sm:w-full">
            <div className="flex flex-col m-4 ">
              <span className="font-bold border-b-2">Cart Summary</span>
              <div className="flex m-4 border-b-2">
                <span className="flex-1">Sub-total</span>
                <span className="">{cart.total_price}</span>
              </div>
              <div className="flex m-4 border-b-2">
                <span className="flex-1">Total</span>
                <span className="">{cart.total_price}</span>
              </div>
              <SubmitButton
                name={`Proceed to Checkout`}
                otherStyles="bg-black"
                handleSubmit={() =>
                  navigate(`/${storeid}/${store_name}/checkout`)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
