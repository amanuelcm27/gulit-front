import React, { useEffect, useRef, useState } from "react";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalProvider";
const StoreOnBoarding = () => {
  const navigate = useNavigate();
  const { userInfo } = useGlobalContext();
  const location = useLocation();
  const isFirstVisit = location.state?.isFirstVisit ?? false;

  if (userInfo?.role === "seller" && !isFirstVisit) {
    // prevents a user who already is seller from onboarding again
    return <Navigate to="/admin/products" />;
  }

  const [storeData, setStoreData] = useState();
  return (
    <div className="w-[85%] h-[600px] ">
      <div className="flex flex-col h-full justify-center items-center">
        <img src={images.welcome} className="h-1/2" />
        <span className="text-4xl font-extrabold">WELCOME TO YOUR STORE</span>
        <span className="text-xl font-light">
          Seems like this is your first time start by telling us about your
          business
        </span>
        <SubmitButton
          handleSubmit={() => navigate("/admin/theme")}
          name="Let's Begin"
          otherStyles="bg-orange-400 w-1/2 mt-2"
        />
      </div>
    </div>
  );
};

export default StoreOnBoarding;
