import React from "react";
import { useNavigate } from "react-router-dom";

const CartItem = ({
  item,
  removeFromCart,
  updateQuantity,
  storeid,
  store_name,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      className="max-sm:hidden flex items-center cursor-pointer h-[100px] mx-4  bg-gray-50 hover:bg-gray-100 p-2 rounded-md "
    >
      <div className="flex-1  flex items-center ">
        <i
          onClick={() => removeFromCart(item.id)}
          class="hover:text-red-500 hover:scale-110 text-xl fa-solid fa-circle-xmark"
        ></i>
        <img src={item.product.image} className="w-16 h-full m-2" />
        <div
          onClick={() =>
            navigate(`/${storeid}/${store_name}/product/${item.product.id}`)
          }
          className="font-bold w-1/2 truncate"
        >
          {item.product.name}
        </div>
      </div>
      <div className="flex items-center gap-10 b ">
        <span className="">{item.product.price}</span>
        <div className="flex">
          <div
            onClick={() => updateQuantity(item.id, item.quantity, "decr")}
            className="bg-gray-200 hover:bg-gray-400 cursor-pointer p-2"
          >
            <i class="fa-solid fa-minus"></i>
          </div>
          <div className="bg-gray-100 p-2">
            <span>{item.quantity}</span>
          </div>
          <div
            onClick={() => updateQuantity(item.id, item.quantity, "incr")}
            className="bg-gray-200 hover:bg-gray-400 cursor-pointer p-2"
          >
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <span className="font-light">{item.sub_total}</span>
      </div>
    </div>
  );
};

export default CartItem;
