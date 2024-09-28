import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AdminSideBar from "../../components/AdminSideBar";

const AdminDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="m-4 h-full flex">
        <AdminSideBar />
        {/* <div className="w-[45%] h-[600px] overflow-y-scroll"></div>
        <div className="w-[40%] h-[600px] overflow-y-scroll"></div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
