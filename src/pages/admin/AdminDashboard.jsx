import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AdminSideBar from "../../components/AdminSideBar";
import Footer from "../../components/Footer";
import { useGlobalContext } from "../../context/GlobalProvider";

const AdminDashboard = () => {
  const { userInfo } = useGlobalContext();
  const location = useLocation();
  if (userInfo?.role === "buyer") {
    return <Navigate to="/customer" />;
  } else if (!userInfo?.role) {
    return <Navigate to="/role" />;
  }
  return (
    <div>
      <NavBar />
      <div className="m-4  flex">
        <AdminSideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
