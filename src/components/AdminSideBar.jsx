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
      className={`w-[15%] max-sm:w-full h-[600px] max-sm:h-auto py-4 max-sm:p-0 sticky  top-0 max-sm:bg-white  z-10 ${
        minimize && "w-auto"
      }  `}
    >
      <div
        onClick={() => setMinimize(!minimize)}
        className=" max-sm:hidden text-xl cursor-pointer hover:text-gray-700"
      >
        <i
          class={`fa-solid ${
            minimize ? "fa-circle-chevron-right" : "fa-circle-chevron-left"
          }`}
        ></i>
      </div>

      <div className="flex flex-col max-sm:justify-center max-sm:flex-row m-2 max-sm:m-0 shadow-md ">
 
        <div
          onClick={() =>
            navigate(
              ownsStore
                ? `/${userOwnedStore?.id}/${userOwnedStore?.name}/home`
                : "/admin/theme"
            )
          }
          className={
            `flex mt-4 max-sm:ml-4 items-center p-2 hover:cursor-pointer`
          }
        >
           <span className={`${minimize ? "hidden" : "flex-1 max-sm:hidden"}`}>
            your store
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
        <AdminSideBarItem
          to="/admin/payment_method"
          hide={minimize}
          name="Payment Method"
          icon="fa-solid fa-money-check-dollar"
          title="Payment Method"
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
