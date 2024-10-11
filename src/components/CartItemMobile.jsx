import React from "react";

const CartItemMobile = ({item , removeFromCart , updateQuantity}) => {
  return (
    <div
      className="sm:hidden flex flex-col items-center w-full p-2 "
    >
      <span className="ml-auto">
        <i
          onClick={() => removeFromCart(item.id)}
          class="  text-xl fa-solid fa-circle-xmark"
        ></i>
      </span>
      <img src={item.product.image} className="w-28" />
      <span className="text-xl w-1/2 truncate text-center">
        {item.product.name}
      </span>
      <div className="flex w-full m-4">
        <span>{item.product.price}</span>
        <span className="ml-auto">Price</span>
      </div>
      <div className="flex w-full m-4">
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
        <span className="ml-auto">Quantity</span>
      </div>
      <div className="flex w-full m-4">
        <span>{item.sub_total}</span>
        <span className="ml-auto">Sub-Total</span>
      </div>
    </div>
  );
};

export default CartItemMobile;
