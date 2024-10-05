import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AdminSideBar from "../../components/AdminSideBar";
import Footer from "../../components/Footer";

const AdminDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="m-4  flex">
        <AdminSideBar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
