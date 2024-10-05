import React from "react";
import NavBar from "../../components/NavBar";
import CustomerDashBoardSideBar from "../../components/CustomerDashBoardSideBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useGlobalContext } from "../../context/GlobalProvider";
const CustomerDashBoard = () => {
  const naviagte = useNavigate()
  const { userInfo} = useGlobalContext()
  // if ( userInfo?.role === 'seller') { // prevents buyer from accessing admin dashboard
  //   return <Navigate to="/admin" />
  // }
  return (
    <div>
      <NavBar />
      <div className="m-8">
        <div className="font-light  ">
          <span onClick={()=>naviagte(-1)} className=" p-2 px-8 group  cursor-pointer">
            <i className="fa-solid fa-left-long opacity-0 group-hover:-translate-x-2 group-hover:opacity-100  transition-all duration-300 transform translate-x-[10px]"></i>{" "}
            Go Back
          </span>
        </div>
        <div className="flex ">
          <CustomerDashBoardSideBar />
          <div className="w-[75%] shadow-2xl ">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default CustomerDashBoard;
