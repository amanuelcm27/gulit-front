import React from "react";

const Theme = () => {
  return (
    <div>
      <NavBar />
      <div className="m-4 h-full flex">
        <AdminSideBar />
        <div className="w-[45%] h-[600px] border-2"></div>
        <div className="w-[40%] h-[600px] border-2"></div>
      </div>
    </div>
  );
};

export default Theme;
