import React, { useEffect, useState } from "react";
import images from "../constants/images";
import NavItem from "./NavItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import DropDownItem from "./DropDownItem";
import { logout } from "../utils/authentication";
import SubmitButton from "../components/SubmitButton";
const NavBar = () => {
  const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout_user = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  },[menuOpen])

  return (
    <div className="relative w-full h-[80px] flex items-center bg-orange-400 shadow-xl">
      <div className="flex-1">
        <img src={images.logo} className="w-[80px]" />
      </div>
      <div className="sm:hidden m-4">
        <span className="text-2xl " onClick={()=>setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-list"}`}></i>
        </span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-20  bg-white bg-opacity-95  z-50">
          <div className="flex flex-col  m-2  h-full">
    
            <DropDownItem
              handleClick={() =>{setMenuOpen(false) , navigate('/')}}
              icon={`fa-solid fa-home`}
              name="Home"
            />
            <DropDownItem
              handleClick={()=>navigate('/')}
              icon={`fa-solid fa-store`}
              name="Stores"
            />
            <DropDownItem
              handleClick={()=>navigate('/about')}
              icon={`fa-solid fa-info-circle`}
              name="About"
            />
            <DropDownItem
              handleClick={()=>navigate('/account')}
              icon={`fa-solid fa-gear`}
              name="My Account"
            />
             <DropDownItem
              handleClick={logout_user}
              icon={`fa-solid fa-right-from-bracket`}
              name="Logout"
            />
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="flex max-sm:hidden items-center m-5 text-white">
        <NavItem name="Home" />
        <NavItem name="Stores" />
        <NavItem name="About" />
        <div className="relative text-black group">
          <img src={images.user} className="w-10 cursor-pointer" />
          <div className="absolute right-0 w-[250px] rounded-md bg-gray-200 shadow-custom opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            <DropDownItem icon={`fa-solid fa-user`} name={userInfo.username} />
            <DropDownItem
              handleClick={logout_user}
              icon={`fa-solid fa-right-from-bracket`}
              name="Logout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
