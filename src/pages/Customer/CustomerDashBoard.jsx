import React from "react";
import NavBar from "../../components/NavBar";
import CustomerDashBoardSideBar from "../../components/CustomerDashBoardSideBar";
import { Outlet } from "react-router-dom";

const CustomerDashBoard = () => {
  return (
    <div>
      <NavBar />
      <div className="m-8">
        <div className="font-light  ">
          <span className=" p-2 px-8 group  cursor-pointer">
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
    </div>
  );
};

export default CustomerDashBoard;
