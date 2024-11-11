import React from "react";
import { NavLink } from "react-router-dom";

const AdminSideBarItem = ({ name, title, icon, hide, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex mt-4 max-sm:ml-4 items-center p-2 hover:cursor-pointer  ${
          isActive ? "bg-gray-200" : ""
        }`
      }
    >
      <span className={`${hide ? "hidden" : "flex-1 max-sm:hidden"}`}>
        {name}
      </span>
      <span title={title}>
        <i className={icon}></i>
      </span>
    </NavLink>
  );
};

export default AdminSideBarItem;
