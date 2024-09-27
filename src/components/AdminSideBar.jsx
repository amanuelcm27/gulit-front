import React, { useState } from "react";
import AdminSideBarItem from "./AdminSideBarItem";
import { useSearchParams } from "react-router-dom";

const AdminSideBar = () => {
  const [minimize , setMinimize] = useState(true)
  return (
    <div className={`w-[15%] h-[600px] ${minimize && 'w-auto'}  `}>
      <div onClick={() => setMinimize(!minimize)} className="text-xl cursor-pointer hover:text-gray-700">
        <i class={`fa-solid ${minimize ? 'fa-circle-chevron-left' : "fa-circle-chevron-right"}`}></i>

      </div>
      <div className="flex-1 flex flex-col m-2  ">
        <AdminSideBarItem hide={minimize} name="Back to Store" icon="fa-solid fa-house" />
        <AdminSideBarItem hide={minimize} name="Products" icon="fa-solid fa-box" />
        <AdminSideBarItem hide={minimize} name="Orders" icon="fa-solid fa-cart-shopping" />
        <AdminSideBarItem hide={minimize} name="Analytics" icon="fa-solid fa-chart-simple" />
        <AdminSideBarItem hide={minimize} name="Gift / Coupon" icon="fa-solid fa-gift" />
        <AdminSideBarItem hide={minimize} name="Themes" icon="fa-solid fa-palette" />
      </div>
    </div>
  );
};

export default AdminSideBar;
