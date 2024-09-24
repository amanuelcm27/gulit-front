import React from "react";
import images from "../constants/images";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import DropDownItem from "./DropDownItem";
import { logout } from "../utils/authentication";

const NavBar = () => {
    const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();
    const navigate = useNavigate()
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
    <div className="w-full h-[80px] flex items-center bg-orange-400 shadow-custom">
      <div className="flex-1">
        <img src={images.logo} className="w-[80px]" />
      </div>
      <div className="flex items-center m-5 text-white">
        <NavItem name="Home" />
        <NavItem name="Stores" />
        <NavItem name="About" />
        <div className="relative text-black group">
          <img src={images.user} className="w-10 cursor-pointer" />
          <div className="absolute right-0 w-[250px] rounded-md bg-gray-200 shadow-custom opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            <DropDownItem icon={images.user} name={userInfo.username} />
            <DropDownItem
              logout={logout_user}
              icon={images.logout}
              name="Logout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
