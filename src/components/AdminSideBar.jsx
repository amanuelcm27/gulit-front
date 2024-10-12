import React, { useState } from "react";
import AdminSideBarItem from "./AdminSideBarItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import { usecheckStoreOwnership } from "../handlers/checkOwnership";

const AdminSideBar = () => {
  const [minimize, setMinimize] = useState(false);
  const navigate = useNavigate();
  const [userOwnedStore, setUserOwnedStore] = useState(null);
  const [ownsStore] = usecheckStoreOwnership(setUserOwnedStore);
  return (
    <div
      className={`w-[15%] h-[600px]  sticky top-0  ${minimize && "w-auto"}  `}
    >
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
        <div
          onClick={() =>navigate(ownsStore  ? `/${userOwnedStore?.id}/${userOwnedStore?.name}/home` : "/admin/theme") }
          className={`flex mt-4 items-center p-2 hover:cursor-pointer`}>
          <span className={`${minimize ? "hidden" : "flex-1"}`}>
            Back to your store
          </span>
          <span title="Back to Store">
            <i className="fa-solid fa-house"></i>
          </span>
        </div>
        <AdminSideBarItem
          to="/admin/products"
          hide={minimize}
          name="Products"
          icon="fa-solid fa-box"
          title="Products"
        />
        <AdminSideBarItem
          to="/admin/orders"
          hide={minimize}
          name="Orders"
          icon="fa-solid fa-cart-shopping"
          title="Orders"
        />
        <AdminSideBarItem
          to="/admin/analytics"
          hide={minimize}
          name="Analytics"
          icon="fa-solid fa-chart-simple"
          title="Analytics"
        />
        <AdminSideBarItem
          to="/admin/coupon"
          hide={minimize}
          name="Gift / Coupon"
          icon="fa-solid fa-gift"
          title="Coupon"
        />
        <AdminSideBarItem
          to="/admin/theme"
          hide={minimize}
          name="Themes"
          icon="fa-solid fa-palette"
          title="Themes"
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
