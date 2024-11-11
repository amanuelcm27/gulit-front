import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import { logout } from "../utils/authentication";

const CustomerDashBoardSideBar = () => {
  const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();

  const logout_user = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/4  max-sm:w-full h-full sm:sticky top-0  ">
      <span className="text-4xl font-extrabold max-sm:text-xl">My Account</span>
      <div className="flex max-sm:flex-row flex-col m-2 cursor-pointer">
        <NavLink to="/customer/details" className={({isActive})=>`flex mt-2 ${isActive && 'bg-gray-200'} rounded-lg p-2`}>
          <span className="flex-1 max-sm:hidden">
            <i className="fa-regular fa-user px-2"></i> My details
          </span>
          <span className="flex-1 sm:hidden">
            <i className="fa-regular fa-user px-2"></i> Details
          </span>
        </NavLink>
        <NavLink to="/customer/orders" className={({isActive})=>`flex mt-2 ${isActive && 'bg-gray-200'} rounded-lg p-2`}>
          <span className="flex-1 max-sm:hidden">
            <i class="fa-solid fa-bag-shopping px-2"></i> My Orders
          </span>
          <span className="flex-1 sm:hidden">
            <i class="fa-solid fa-bag-shopping px-2"></i> Orders
          </span>
        </NavLink>
        <div onClick={logout_user} className="flex mt-2  rounded-lg p-2">
          <span className="flex-1 text-red-400 hover:text-red-600">
            <i class="fa-solid fa-right-from-bracket px-2 "></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashBoardSideBar;
