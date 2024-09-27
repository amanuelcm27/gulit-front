import React from "react";

const AdminSideBarItem = ({name , icon , hide ,active}) => {
  return (
    <div className="flex mt-4 hover:cursor-pointer items-center hover:bg-gray-200 p-2">
      <span className={` ${hide ? "hidden" : 'flex-1'}`}>{name}</span>
      <span>
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default AdminSideBarItem;
