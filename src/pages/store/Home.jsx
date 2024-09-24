import React from "react";
import NavItem from "../../components/NavItem";
import DropDownItem from "../../components/DropDownItem";
import { useGlobalContext } from "../../context/GlobalProvider";
import images from "../../constants/images";

const Home = () => {
  const { userInfo } = useGlobalContext();
  return (
    <div>
      <div className="w-full h-[80px] flex items-center shadow-lg  ">
        <div className="flex-1">
          <img src={images.logo} className="w-[80px]" />
        </div>
        <div className="flex items-center m-5">
          <NavItem name="Home" />
          <NavItem name="All Products" />
          <NavItem name="About Gulit" />
          <NavItem name="Account" />

          <div className="relative group">
            <img src={images.user} className="w-10 cursor-pointer" />
            <div className="absolute right-0 w-[250px] rounded-md bg-gray-200 shadow-custom opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
              <DropDownItem icon={images.user} name={userInfo.username} />
              <DropDownItem
                // logout={logout_user}
                icon={images.logout}
                name="Logout"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[550px]">
        <div className="flex h-full items-center   m-10 ">
          <div className="w-1/2 flex flex-col ">
            <span className="text-7xl font-extrabold">
              Coffee Beans you would die for
            </span>
            <button className="active:bg-slate-700 text-left text-white p-5 mt-5 font-extrabold bg-black w-1/2">
              Start Shopping <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <div className="w-1/2 h-full overflow-hidden rounded-xl ">
            <img src={images.tech} className="hover:scale-105 transition-all duration-300 object-cover w-full h-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
