import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton";
import images from "../../constants/images";
import { apiRequest } from "../../handlers/apiHandler";
import LoadingCard from "../../components/LoadingCard";
import InfoCard from "../../components/InfoCard";
import EmptyCard from "../../components/EmptyCard";
import Footer from "../../components/Footer";

const Stores = () => {
  const navigate = useNavigate();
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const [stores, setStores] = useState([]);
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchStores = async () => {
    const response = await apiRequest("get", "all_stores/");
    if (response.success === false) {
      setInfo("No stores found");
      setError(true);
    } else {
      setLoading(false);
      setStores(response);
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const submitSearch = async () => {
    const response = await apiRequest(
      "get",
      `stores/search?name=${searchTerm}`
    );
    if (response.success === false) {
      setInfo("Error in Searching for stores");
      setError(true);
    } else {
      setStores(response);
      setShowFilterSideBar(false);
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    fetchStores();
  }, []);
  useEffect(() => {
    if (showFilterSideBar) {
      inputRef.current.focus();
    }
  }, [showFilterSideBar]);
  return (
    <div>
      <InfoCard info={info} iserror={error} />
      <NavBar />
      <div className="flex max-sm:m-1 m-10 relative">
        <LoadingCard text="Stores" show={loading} />

        <div className="flex flex-col w-[80%] max-sm:w-full ">
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
              <div className="relative flex   mt-4">
                <input
                  ref={inputRef}
                  type="text"
                  className="p-4 pr-10 flex-1 border-2 border-black"
                  placeholder="store name ..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <div
                  onClick={() => setSearchTerm("")}
                  className="absolute z-50 bg-white cursor-pointer  right-3 text-gray-400 mt-4"
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>

              <SubmitButton
                otherStyles={`bg-orange-400 mt-2`}
                name={`Search`}
                handleSubmit={submitSearch}
              />
            </div>
          </div>
          <div className="h-[80px] flex items-center  p-2 bg-gray-100">
            <div
              onClick={() => setShowFilterSideBar(true)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <i className="fa-solid fa-list"></i> Filter
            </div>
            <div className="p-2">
              <span className="max-sm:text-sm"> Choose from over {stores?.length} stores in gulit</span>
            </div>
          </div>

          <div className="flex  max-sm:flex-col  flex-wrap  p-2 overflow-y-scroll cursor-pointer">
            {stores.length >= 1 ? (
              stores.map((store) => (
                <div
                  onClick={() => navigate(`/${store.id}/${store.name}/home`)}
                  key={store.id}
                  className=" w-[30%] max-sm:w-full h-[350px]  border-2 m-2  rounded-xl shadow-lg"
                >
                  <div
                    style={{ backgroundImage: `url(${store.logo})` }}
                    className="w-full h-full bg-cover  bg-opacity-50 bg-center rounded-xl"
                  >
                    <div className="opacity-35 hover:opacity-100  transition-all duration-300 w-full h-full flex flex-col justify-end ">
                      <div className="bg-black flex flex-col rounded-xl  bg-opacity-70 p-8 text-center">
                        <span className="w-full truncate text-white font-extrabold text-4xl">
                          {store.name}
                        </span>
                        <span className="text-orange-400 hover:text-yellow-300 font-bold text-lg">
                          Visit Store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <EmptyCard
                styles="w-full text-center"
                text="No stores have been found ! "
                btext="Search for stores"
                handleClick={() => setShowFilterSideBar(true)}
              />
            )}
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${images.brand})` }}
          className="w-[20%] h-[700px] bg-cover sticky top-0 max-sm:hidden"
        >
          <div className="w-full h-full bg-black bg-opacity-45 p-2">
            <span className="text-7xl font-extrabold text-white">
              Get Limited time offers Now !
            </span>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Stores;
