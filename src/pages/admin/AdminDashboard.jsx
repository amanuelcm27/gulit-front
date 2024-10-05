import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AdminSideBar from "../../components/AdminSideBar";
import Footer from "../../components/Footer";
import { useGlobalContext } from "../../context/GlobalProvider";

const AdminDashboard = () => {
  const { userInfo } = useGlobalContext()
  const location = useLocation()
  if ( userInfo?.role === 'buyer') { // prevents buyer from accessing admin dashboard
    return <Navigate to="/stores" />
  }

  else if (!userInfo?.role ) { // prevents non-enrolled users from accessing admin dashboard
    return <Navigate to="/role" />
  }
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
