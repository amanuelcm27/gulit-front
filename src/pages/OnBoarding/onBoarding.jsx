import { useGlobalContext } from "../../context/GlobalProvider";
import { logout } from "../../utils/authentication";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
const OnBoarding = () => {
  const { userInfo, setIsLoggedIn, setUserInfo } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className="w-full items-center ">
      <NavBar  />
      <div
        style={{ backgroundImage: `url(${images.header})` }}
        className={`w-full h-[650px] bg-cover `}
      >
        <div className="w-full h-full  bg-opacity-50 bg-black">
          <div className="w-[70%] h-full p-10 flex flex-col justify-center">
            <span className=" text-white font-extrabold text-7xl ">
              Turn Clicks into Customers Build Your Online Store Now
            </span>
            <SubmitButton
              handleSubmit={() => navigate("/role")}
              otherStyles="mt-10 text-4xl text-left font-bold w-1/2 "
              name="Start Selling"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[640px] items-center flex justify-center">
        <div className="w-[40%]">
          <img src={images.globe} className="w-full" />
        </div>
        <div className="w-1/2">
          <div className=" text-4xl font-extrabold">
            “More Customers are Shopping Online Than Ever Before!”
          </div>
          <div className=" flex flex-wrap w-full mt-3 ">
            <div className="w-[45%] m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Maximize Profit with Lower Costs!
                </span>
              </div>
              <div>
                <img src={images.price} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Reach a Global Audience Effortlessly!
                </span>
              </div>
              <div>
                <img src={images.globeIcon} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] m-2 h-[100px] flex items-center border-l-8 border-orange-400">
              <div className="flex-1 p-2">
                <span className="text-xl font-bold">
                  Boost Your Sales Online!
                </span>
              </div>
              <div>
                <img src={images.perf} className="w-16" />
              </div>
            </div>
            <div className="w-[45%] m-2 h-[100px] flex items-center border-l-8 border-orange-400">
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
      <div className="w-full h-[640px] ">
        <div className="p-16 w-full flex flex-col">
          <span className="text-2xl font-extralight">set up your store</span>
          <span className="text-5xl font-extrabold">
            No Hustle in setting up your store
          </span>
        </div>
        <div className="flex mx-10 ">
          <div className="w-1/2 p-4 flex flex-col">
            <span className=" text-4xl font-pbold">
              With couple of clicks you can set up and launch your store to your
              customers{" "}
            </span>
            <SubmitButton
              name={`Build Your Store`}
              otherStyles={"w-1/2 mt-16 text-lg "}
            />
          </div>
          <div>
            <img src={images.store} className="w-full object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full   ">
        <div className="pt-12 m-12">
          <span className="text-5xl font-extrabold">
            As a Store owner you can
          </span>
        </div>
        <div className="flex m-12 items-center">
          <div className=" flex flex-wrap">
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light ">
                Add as many products as you want
              </div>
              <div>
                <img src={images.add} />
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                connect to a secure payment gateway
              </div>
              <div>
                <img src={images.card} />
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                Set your prices and offer discount prices
              </div>
              <div>
                <img src={images.coin} />
              </div>
            </div>
            <div className="border-[8px] hover:-translate-y-2 transition-all duration-200 rounded-md w-[40%] h-[100px] flex items-center  m-4 p-4  border-orange-400">
              <div className="flex-1 font-light">
                Track how many users are visiting your store
              </div>
              <div>
                <img src={images.eyeVector} />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={images.cart} className="w-full" />
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="w-full text-center">
          <span className="text-7xl font-extrabold">
            Visit our top stores
          </span>
        </div>
        <div>

        </div>
      </div> */}
      <div className="mx-10">
        <div className="p-10 text-center">
          <span className="text-4xl font-extrabold">
            Common Industries on our platform
          </span>
        </div>
        <div className="w-full flex overflow-x-scroll flex-nowrap">
          <div
            style={{ backgroundImage: `url(${images.header})` }}
            className="w-[600px] h-[400px] bg-cover rounded-lg  m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30  rounded-lg hover:bg-opacity-50  ">
              <span className="text-white font-extrabold text-xl ">
                Fashion & apparrell
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.tech})` }}
            className="w-[600px] h-[400px] bg-cover rounded-lg  m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 duration-300 rounded-lg hover:bg-opacity-50   ">
              <span className="text-white font-extrabold text-xl">
                Tech & Gadgets
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.health})` }}
            className="w-[600px] h-[400px] bg-cover rounded-lg  m-2 flex-shrink-0"
          >
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 duration-300 rounded-lg hover:bg-opacity-50   ">
              <span className="text-white font-extrabold text-xl">
                Health & beauty
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-24 h-[600px]">
        <div className="w-1/2  p-10">
          <div className="flex flex-col">
            <span className="text-4xl font-bold">
              Still not convinced why not see what our customers say
            </span>
            <div className="flex flex-col justify-center items-center mt-10 h-[250px] text-center shadow-custom rounded-xl">
              <span className="font-light text-2xl">
                “ I just witnessed my customers grow from couple handred to 1000
                in a month ”
              </span>
              <span className="font-light text-2xl">John Matt</span>
              <div className="mt-2 flex cursor-pointer">
                <img src={images.circleLeft} />
                <img src={images.circleRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={images.header}
            className="w-full h-full rounded-[50%] object-cover "
          />
        </div>
      </div>
      <div className="m-10 text-center">
        <SubmitButton
          name="Get Started"
          otherStyles={`w-1/2 font-extrabold rounded-xl`}
        />
      </div>
      <div className="flex h-[400px] bg-orange-400">
        <div className="flex flex-col ">
          <img src={images.logo} className="w-[40%]" />
          <div className="m-10 flex-col flex text-white font-bold text-2xl cursor-pointer">
            <span className=" hover:underline p-2">Stores</span>
            <span className=" hover:underline p-2">Products</span>
            <span className=" hover:underline p-2">About</span>
          </div>
        </div>
        <div className="flex flex-col m-10  mt-auto ml-auto">
          <span className="text-white text-xl p-2">
            {" "}
            <i className="fa-brands fa-youtube"></i> YouTube{" "}
          </span>
          <span className="text-white text-xl p-2">
            {" "}
            <i className="fa-brands fa-linkedin"></i> LinkedIn{" "}
          </span>
          <span className="text-white text-xl p-2">
            {" "}
            <i className="fa-brands fa-tiktok"></i> Tiktok{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding;
