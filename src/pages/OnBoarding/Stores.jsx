import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton";
import images from "../../constants/images";

const Stores = () => {
  const navigate = useNavigate();
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="flex max-sm:m-1 m-10 relative">
        <div className="flex flex-col w-[80%]">
          <div
            className={`absolute z-10  bg-white bg-opacity-95 max-sm:w-full w-1/4 h-full transition-transform duration-500 ${
              showFilterSideBar ? "translate-x-0" : "-translate-x-[500px]"
            }`}
          >
            <div className="flex flex-col m-8">
              <span
                onClick={() => setShowFilterSideBar(false)}
                className="ml-auto hover:scale-110 cursor-pointer"
              >
                <i className="fa-solid fa-close"></i>
              </span>
              <span className="font-bold">Search for stores </span>

              <input
                type="text"
                className="p-4 border-2 border-black"
                placeholder="store name ..."
              />
              <SubmitButton
                otherStyles={`bg-orange-400 mt-2`}
                name={`Search`}
              />
            </div>
          </div>
          <div className="h-[80px] flex items-center p-2 bg-gray-100">
            <div
              onClick={() => setShowFilterSideBar(true)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <i className="fa-solid fa-list"></i> Filter
            </div>
            <div className="p-2">
              <span> Choose from over 3000 stores on our platfom</span>
            </div>
          </div>

          <div className="flex  flex-wrap  p-2 overflow-y-scroll cursor-pointer">
            <div className=" w-[30%] h-[350px]  border-2 m-2  rounded-xl shadow-lg">
              <div
                style={{ backgroundImage: `url(${images.brand})` }}
                className="w-full h-full bg-cover  bg-opacity-50 rounded-xl"
              >
                <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                  <div className="bg-black flex flex-col rounded-xl  bg-opacity-70 p-8 text-center">
                    <span className="w-full truncate text-white font-extrabold text-4xl">
                      Store name
                    </span>
                    <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                      Visit Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[30%] h-[350px]  border-2 m-2  rounded-xl shadow-lg">
              <div
                style={{ backgroundImage: `url(${images.header})` }}
                className="w-full h-full bg-contain bg-no-repeat  bg-opacity-50 rounded-xl"
              >
                <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                  <div className="bg-black flex flex-col  rounded-xl bg-opacity-70 p-8 text-center">
                    <span className="w-full truncate text-white font-extrabold text-4xl">
                      Store name
                    </span>
                    <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                      Visit Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[30%] h-[350px]  border-2 m-2  rounded-xl shadow-lg">
              <div
                style={{ backgroundImage: `url(${images.health})` }}
                className="w-full h-full bg-cover  bg-opacity-50 rounded-xl"
              >
                <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                  <div className="bg-black flex flex-col  rounded-xl bg-opacity-70 p-8 text-center">
                    <span className="w-full truncate text-white font-extrabold text-4xl">
                      Store name
                    </span>
                    <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                      Visit Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[30%] h-[350px]  border-2 m-2  rounded-xl shadow-lg">
              <div
                style={{ backgroundImage: `url(${images.tech})` }}
                className="w-full h-full bg-cover   bg-opacity-50 rounded-xl"
              >
                <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                  <div className="bg-black flex flex-col rounded-b-xl  bg-opacity-70 p-8 text-center">
                    <span className="w-full truncate text-white font-extrabold text-4xl">
                      Store name
                    </span>
                    <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                      Visit Store
                    </span>
                  </div>
                </div>
              </div>
            </div><div className=" w-[30%] h-[350px]  border-2 m-2  rounded-xl shadow-lg">
              <div
                style={{ backgroundImage: `url(${images.tech})` }}
                className="w-full h-full bg-cover   bg-opacity-50 rounded-xl"
              >
                <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                  <div className="bg-black flex flex-col rounded-xl  bg-opacity-70 p-8 text-center">
                    <span className="w-full truncate text-white font-extrabold text-4xl">
                      Store name
                    </span>
                    <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                      Visit Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${images.brand})` }}
          className="w-[20%] h-[700px] bg-cover sticky top-0"
        >
          <div className="w-full h-full bg-black bg-opacity-45 p-2">
            <span className="text-7xl font-extrabold text-white">
              Get Limited time offers Now !
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
