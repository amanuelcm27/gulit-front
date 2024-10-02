import React, { useState } from "react";
import AdminSideBarItem from "./AdminSideBarItem";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminSideBar = () => {
  const [minimize, setMinimize] = useState(false);
  const [active, setActive] = useState();
  const navigate = useNavigate();

  return (
    <div className={`w-[15%] h-[600px]  sticky top-0  ${minimize && "w-auto"}  `}>
      <div
        onClick={() => setMinimize(!minimize)}
        className="text-xl cursor-pointer hover:text-gray-700"
      >
        <i
          class={`fa-solid ${
            minimize ? "fa-circle-chevron-left" : "fa-circle-chevron-right"
          }`}
        ></i>
      </div>
      <div className="flex-1 flex flex-col m-2 shadow-md  ">
        <AdminSideBarItem
          to="/home"
          hide={minimize}
          name="Back to Store"
          icon="fa-solid fa-house"
          title = "Back to Store"
        />
        <AdminSideBarItem
          to="/admin/products"
          hide={minimize}
          name="Products"
          icon="fa-solid fa-box"
          title = "Products"

        />
        <AdminSideBarItem
          to="/admin/orders"
          hide={minimize}
          name="Orders"
          icon="fa-solid fa-cart-shopping"
          title = "Orders"

        />
        <AdminSideBarItem
          to="/admin/analytics"
          hide={minimize}
          name="Analytics"
          icon="fa-solid fa-chart-simple"
          title = "Analytics"

        />
        <AdminSideBarItem
          to="/admin/coupon"
          hide={minimize}
          name="Gift / Coupon"
          icon="fa-solid fa-gift"
          title = "Coupon"

        />
        <AdminSideBarItem
          to="/admin/theme"
          hide={minimize}
          name="Themes"
          icon="fa-solid fa-palette"
          title = "Themes"

        />
      </div>
    </div>
  );
};

export default AdminSideBar;
