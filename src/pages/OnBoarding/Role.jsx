import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalProvider";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";

const Role = () => {
  const navigate = useNavigate();
  const { userInfo , setUserInfo } = useGlobalContext();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const updateUserRole = async (userRole) => {
    const response = await apiRequest("patch", `set_role/${userInfo.id}/`, {
      role: userRole,
    });
    if (response.success === false) {
      setInfo("Error In setting your role");
      setError(true);
      console.log(response)
    } else {
      
      setInfo(`you have become a ${userRole}`);
      setError(false);
      setTimeout(() => {
        if (userRole === "seller") {
          setUserInfo(response)
          navigate("/admin/onboarding", { state: { isFirstVisit: true } });
        } else {
          navigate("/stores");
        }
      }, 2000);
    }
  };
  useEffect(() => {
    if (userInfo?.role) {
      if (userInfo.role === "seller") {
        navigate("/admin/products");
      } else {
        navigate("/stores");
      }
    }
   }, []);
  return (
    <>
      <InfoCard iserror={error} info={info} />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-orange-400">
        <div className="w-80% h-80% max-sm:h-auto flex flex-col p-10 max-sm:items-center bg-white rounded-lg">
          <img src={images.logo} className="w-24" />
          <div className="m-4 max-sm:m-0 max-sm:p-1  max-sm:flex-col  h-full flex cursor-pointer">
            <div
              onClick={() => updateUserRole("seller")}
              className="  max-sm:w-full max-sm:text-center w-1/2 rounded-lg hover:bg-gray-300 flex flex-col justify-center items-center"
            >
              <img src={images.saler} className="w-1/2 " />
              <span className="font-bold text-lg">I am Business owner</span>
              <span>Create your store and start selling</span>
            </div>
            <div
              onClick={() => updateUserRole("buyer")}
              className=" max-sm:w-full max-sm:text-center max-sm:mt-10 rounded-lg w-1/2 hover:bg-gray-300 flex flex-col justify-center items-center"
            >
              <img src={images.buyer} className="w-1/2 " />
              <span className="font-bold text-lg">I am Shopping</span>
              <span>Choose from our wide variety of stores</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
