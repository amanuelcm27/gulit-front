import React, { useEffect, useState } from "react";
import images from "../constants/images";
import NavItem from "./NavItem";
import DropDownItem from "./DropDownItem";
import { useGlobalContext } from "../context/GlobalProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../utils/authentication";
import { useStoreContext } from "../context/StoreContext";

const StoreNavBar = () => {
  const { userInfo, IsLoggedIn, setIsLoggedIn, setUserInfo } =
    useGlobalContext();
  const { id, name, logo } = useStoreContext();
  const navigate = useNavigate();
  const location = useLocation();
  const logout_user = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  return (
    <div className="w-full h-[80px] flex items-center shadow-lg  ">
      <div className="flex-1">
        <img src={logo} className="w-[80px]" />
      </div>
      <div className="sm:hidden m-4 text-2xl">
        <span onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-list"}`}></i>
        </span>
      </div>
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 top-20  bg-white bg-opacity-95  z-50">
          <div className="flex flex-col  m-2  h-full">
            <DropDownItem
              handleClick={() => {
                setMenuOpen(false), navigate(`/${id}/${name}/home`);
              }}
              icon={`fa-solid fa-home`}
              name="Home"
            />
            <DropDownItem
              handleClick={() => {
                setMenuOpen(false), navigate(`/${id}/${name}/products`);
              }}
              icon={`fa-solid fa-box-archive`}
              name="All products"
            />
            <DropDownItem
              handleClick={() =>{ setMenuOpen(false),  navigate(`/${id}/${name}/cart`)}}
              icon={`fa-solid fa-cart-shopping`}
              name="My Cart"
            />
            {userInfo?.role === "buyer" ? (
              <DropDownItem
                handleClick={() => navigate("/customer")}
                icon={`fa-solid fa-gear`}
                name="My Account"
              />
            ) : (
              <DropDownItem
                handleClick={() => navigate("/admin")}
                icon={`fa-solid fa-gear`}
                name="My Account"
              />
            )}

            <DropDownItem
              handleClick={() => {
                setMenuOpen(false), navigate(`/${id}/${name}/about`);
              }}
              icon={`fa-solid fa-info-circle`}
              name="About Us"
            />
            <DropDownItem
              handleClick={() => navigate(`/stores`)}
              icon={`fa-solid fa-store`}
              name="Stores"
            />
            {IsLoggedIn ? <DropDownItem
              handleClick={logout_user}
              icon={`fa-solid fa-right-from-bracket`}
              name="Logout"
            />:
            <DropDownItem
              handleClick={() => navigate("/login" , {state : {from : location.pathname}})}
              icon={`fa-solid fa-right-from-bracket`}
              name="Login"
            />
            }
          </div>
        </div>
      )}
      <div className="max-sm:hidden flex items-center m-5">
        <NavItem
          handleClick={() => navigate(`/${id}/${name}/home`)}
          name="Home"
        />
        <NavItem
          handleClick={() => navigate(`/${id}/${name}/products`)}
          name="All Products"
        />
        <NavItem
          handleClick={() => navigate(`/${id}/${name}/about`)}
          name="About Us"
        />

        <div className="relative group">
          <NavItem name="Account" />
          <div className="absolute z-20 right-0 w-[250px] rounded-md bg-gray-200 shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            {IsLoggedIn && (
              <DropDownItem
                icon={`fa-solid fa-user`}
                name={"My Account"}
                handleClick={() =>
                  userInfo?.role === "seller"
                    ? navigate("/admin")
                    : navigate("/customer")
                }
              />
            )}
            <DropDownItem
              name="Back to Gulit"
              icon={`fa-solid fa-home`}
              handleClick={() => navigate("/stores")}
            />
            {IsLoggedIn ? (
              <DropDownItem
                handleClick={logout_user}
                icon={`fa-solid fa-right-from-bracket`}
                name="Logout"
              />
            ) : (
              <DropDownItem
                handleClick={() => navigate("/login" , {state : {from : location.pathname}})}
                icon={`fa-solid fa-right-from-bracket`}
                name="Login"
              />
            )}
          </div>
        </div>
        <div onClick={() => navigate(`/${id}/${name}/cart`)}>
          <i class="text-4xl hover:text-orange-500 cursor-pointer fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
