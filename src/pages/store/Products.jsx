import React, { useEffect, useState } from "react";
import StoreNavBar from "../../components/StoreNavBar";
import Product from "../../components/Product";
import StoreFooter from "../../components/StoreFooter";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";
import { apiRequest } from "../../handlers/apiHandler";
import LoadingCard from "../../components/LoadingCard";
import EmptyCard from "../../components/EmptyCard";
const Products = () => {
  const navigate = useNavigate();
  const { id } = useStoreContext();
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchProducts = async () => {
    const response = await apiRequest("get", `store/${id}/products/`);
    if (response.success === false) {
      setInfo("No products found");
      setError(true);
    } else {
      setLoading(false);
      setProducts(response);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingCard text="Products" show={loading} />
      ) : (
        <div className=" max-sm:m-1 m-10 relative">
          <div
            className={`absolute z-10 bg-white bg-opacity-95 max-sm:w-full w-1/4 h-full transition-transform duration-500 ${
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
              <span className="font-bold">Filter by price</span>

              <input
                type="text"
                className="p-4 border-2 border-black"
                placeholder="search for products"
              />
              <SubmitButton
                otherStyles={`bg-black mt-2`}
                name={`Apply filters`}
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
              <span> Showing 1-6 of 20 results</span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap justify-center p-2">
            <div className="flex flex-wrap justify-center">
              {products.length >= 1 ? products.map((product) => (
                <Product key={product.id} product={product} />
              )) : 
              <EmptyCard text="Store has no Products yet" handleClick={()=> navigate('/stores')} btext="Visit Other Stores" />}
            </div>

            {products.length >= 1 &&<div className=" flex justify-center  items-center max-sm:mx-8 mx-28 font-light ">
              <button className=" m-2 max-sm:p-2 hover:bg-gray-200   p-4 rounded-lg">
                Previous
              </button>
              <span className="m-2">2 of 20</span>
              <button className=" m-2 max-sm:p-2 hover:bg-gray-200   px-8 p-4 rounded-lg">
                Next
              </button>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
