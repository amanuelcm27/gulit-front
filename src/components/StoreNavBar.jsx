import React from "react";
import images from "../constants/images";
import NavItem from "./NavItem";
import DropDownItem from "./DropDownItem";
import { useGlobalContext } from "../context/GlobalProvider";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/authentication";

const StoreNavBar = () => {
  const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();
  const navigate = useNavigate();
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
    <div className="w-full h-[80px] flex items-center shadow-lg  ">
      <div className="flex-1">
        <img src={images.logo} className="w-[80px]" />
      </div>
      <div className="max-sm:hidden flex items-center m-5">
        <NavItem handleClick={() => navigate("/home")} name="Home" />
        <NavItem
          handleClick={() => navigate("/products")}
          name="All Products"
        />
        <NavItem name="About Us" />

        <div className="relative group">
          <NavItem name="Account" />
          <div className="absolute z-20 right-0 w-[250px] rounded-md bg-gray-200 shadow-custom opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            <DropDownItem icon={`fa-solid fa-user`} name={userInfo.username} />
            <DropDownItem
              name="Back to Gulit"
              icon={`fa-solid fa-home`}
              handleClick={() => navigate("/")}
            />
            <DropDownItem
              handleClick={logout_user}
              icon={`fa-solid fa-right-from-bracket`}
              name="Logout"
            />
          </div>
        </div>
        <div onClick={() => navigate("/cart")}>
          <i class="text-4xl fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div className="sm:hidden m-4 text-2xl">
        <span>
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
    </div>
  );
};

export default StoreNavBar;
