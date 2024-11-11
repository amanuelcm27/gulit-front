import { useGlobalContext } from "../../context/GlobalProvider";
import { logout } from "../../utils/authentication";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
const OnBoarding = () => {
  const { userInfo, setIsLoggedIn, IsLoggedIn } = useGlobalContext();
  const [hasRole, setHasRole] = useState(false);
  useEffect(() => {
    setHasRole(!!userInfo?.role);
  }, [userInfo, IsLoggedIn]);

  const navigate = useNavigate();
  const getStarted = () => {
    if (!hasRole) {
      return navigate("/role");
    }
    return userInfo.role === "seller"
      ? navigate("/admin/products")
      : navigate("/stores");
  };
  return (
    <div className="w-full items-center ">
      <NavBar />
      <div
        style={{ backgroundImage: `url(${images.header})` }}
        className={`w-full h-[650px] bg-cover `}
      >
        <div className="w-full h-full  bg-opacity-50 bg-black">
          <div className="w-[70%] max-sm:w-full h-full max-sm:p-2 p-10 flex flex-col justify-center">
            <span className=" max-sm:text-4xl text-white font-extrabold text-7xl ">
              Turn Clicks into Customers Build Your Online Store Now
            </span>
            <SubmitButton
              handleSubmit={getStarted}
              otherStyles="mt-10 bg-orange-400 text-4xl text-left max-sm:text-xl font-bold  w-1/2 "
              name="Get Started"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[640px] items-center flex justify-center">
        <div className="max-sm:hidden w-[40%]">
          <img src={images.globe} className="w-full" />
        </div>
        <div className="w-1/2 max-sm:w-full">
          <div className=" max-sm:text-xl text-4xl font-extrabold text-center">
            “More Customers are Shopping Online Than Ever Before!”
          </div>
          <div className=" flex flex-wrap  w-full mt-3 ">
            <div className="w-[45%] max-sm:w-[95%] m-2 max-sm:p-2 max-sm:m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className=" text-xl font-bold">
                  Maximize Profit with Lower Costs!
                </span>
              </div>
              <div className="max-sm:ml-auto">
                <img src={images.price} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] max-sm:w-[95%] m-2 max-sm:p-2 max-sm:m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Reach a Global Audience Effortlessly!
                </span>
              </div>
              <div>
                <img src={images.globeIcon} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] max-sm:w-[95%] m-2 max-sm:p-2 max-sm:m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Boost Your Sales Online!
                </span>
              </div>
              <div>
                <img src={images.perf} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] max-sm:w-[95%] m-2 max-sm:p-2 max-sm:m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Join a Thriving Community!
                </span>
              </div>
              <div>
                <img src={images.increase} className="w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[640px] max-sm:h-auto ">
        <div className=" max-sm:p-4 p-16 w-full flex flex-col">
          <span className="text-2xl font-extralight">set up your store</span>
          <span className="max-sm:text-2xl text-5xl font-extrabold">
            No Hustle in setting up your store
          </span>
        </div>

        <div className="flex max-sm:flex-col  mx-10 ">
          <div className="sm:hidden">
            <div>
              <img src={images.store} className="w-full  object-contain" />
            </div>
            <SubmitButton
              handleSubmit={getStarted}
              name={`Build Your Store`}
              otherStyles={"w-1/2 mt-16 text-xl max-sm:mt-4 bg-black "}
            />
          </div>
          <div className=" max-sm:hidden w-1/2 p-4 flex flex-col">
            <span className=" text-4xl font-pbold">
              With couple of clicks you can set up and launch your store to your
              customers
            </span>
            <SubmitButton
            handleSubmit={getStarted}
              name={`Build Your Store`}
              otherStyles={"w-1/2  mt-16 text-lg bg-orange-400 "}
            />
          </div>
          <div className="max-sm:hidden w-1/2">
            <img src={images.store} className="w-full object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full   ">
        <div className=" max-sm:pt-4 max-sm:m-4 pt-12 m-12">
          <span className=" max-sm:text-2xl text-5xl font-extrabold">
            As a Store owner you can
          </span>
        </div>
        <div className=" flex max-sm:m-4 m-12 items-center">
          <div className=" flex flex-wrap">
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] max-sm:w-full h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light ">
                Add as many products as you want
              </div>
              <div className="text-2xl text-orange-400">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] max-sm:w-full h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                connect to a secure payment gateway
              </div>
              <div className="text-2xl text-orange-400">
                <i className="fa-solid fa-credit-card"></i>
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] max-sm:w-full h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                Set your prices and offer discount prices
              </div>
              <div className="text-2xl text-orange-400">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] max-sm:w-full h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                Track how many users are visiting your store
              </div>
              <div className="text-2xl text-orange-400">
                <i className="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden w-1/2">
            <img src={images.cart} className="w-full" />
          </div>
        </div>
      </div>

      <div className="max-sm:mx-4 mx-10">
        <div className="max-sm:p-4 p-10 text-center">
          <span className=" max-sm:text-xl text-4xl font-extrabold">
            Common Industries on our platform
          </span>
        </div>
        <div className="w-full flex overflow-x-scroll flex-nowrap">
          <div
            style={{ backgroundImage: `url(${images.header})` }}
            className="w-[600px] max-sm:w-full h-[400px] bg-cover rounded-lg max-sm:m-1 m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30  rounded-lg hover:bg-opacity-50  ">
              <span className="text-white font-extrabold text-xl ">
                Fashion & apparrell
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.tech})` }}
            className="w-[600px] max-sm:w-full h-[400px] bg-cover rounded-lg max-sm:m-1 m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 duration-300 rounded-lg hover:bg-opacity-50   ">
              <span className="text-white font-extrabold text-xl">
                Tech & Gadgets
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.health})` }}
            className="w-[600px] max-sm:w-full h-[400px] bg-cover rounded-lg max-sm:m-1 m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 duration-300 rounded-lg hover:bg-opacity-50   ">
              <span className="text-white font-extrabold text-xl">
                Health & beauty
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-sm:m-0 m-24 max-sm:h-auto h-[600px]">
        <div className="w-1/2 max-sm:w-full max-sm:p-6 p-10">
          <div className="flex flex-col text-center">
            <span className=" max-sm:text-xl text-4xl font-bold">
              Still not convinced why not see what our customers say
            </span>
            <div className="flex flex-col max-sm:w-full  justify-center  items-center mt-10 h-[250px] text-center shadow-custom rounded-xl">
              <span className="font-light max-sm:text-lg text-2xl">
                “ I just witnessed my customers grow from couple handred to 1000
                in a month ”
              </span>
              <span className="font-light max-sm:text-lg text-2xl">
                John Matt
              </span>
              <div className="mt-2 max-sm:text-2xl text-orange-400  text-4xl flex cursor-pointer">
                <i class="fa-solid px-2 fa-circle-left hover:text-orange-300"></i>
                <i class="fa-solid fa-circle-right hover:text-orange-300"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-sm:hidden">
          <img
            src={images.header}
            className="w-full h-full rounded-[50%] object-cover "
          />
        </div>
      </div>
      <div className="m-10 text-center">
        <SubmitButton
          handleSubmit={getStarted}
          name="Get Started"
          otherStyles={`w-1/2 bg-orange-400 font-extrabold rounded-xl`}
        />
      </div>
      <Footer />
    </div>
  );
};
export default OnBoarding;
