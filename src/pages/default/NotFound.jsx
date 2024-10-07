import React from "react";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-orange-400 flex flex-col items-center justify-center">
      <img src={images.logo} />
      <span className="text-[5rem] font-extrabold">404</span>
      <span className="text-xl font-extrabold">this page doesn't exist</span>
      <span
        onClick={() => navigate("/")}
        className="p-4 m-2 hover:border-2  hover:border-black cursor-pointer hover:bg-orange-400 hover:text-black rounded-full bg-black text-orange-400"
      >
        Go Back Home
      </span>
    </div>
  );
};

export default NotFound;
