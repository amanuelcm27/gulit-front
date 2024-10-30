import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";
import { apiRequest } from "../../handlers/apiHandler";
import LoadingCard from "../../components/LoadingCard";
import EmptyCard from "../../components/EmptyCard";
import InfoCard from "../../components/InfoCard";
import useFormHandler from "../../handlers/useFormHandler";

const Products = () => {
  const navigate = useNavigate();
  const { id, name } = useStoreContext();
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [formData, handleChange, setFormData] = useFormHandler({
    price: priceRange?.max_price || 0,
    rating: 0,
  });
  const fetchProducts = async () => {
    setLoading(true);
    const response = await apiRequest(
      "get",
      `store/${id}/products/?page=${page}`
    );
    if (response.success === false) {
      setInfo("No products found");
      setError(true);
    } else {
      setLoading(false);
      setTotalResults(response.count);
      setProducts(response.results);
    }
  };
  const nextPage = () => {
    if (page < Math.ceil(totalResults / 6)) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const submitSearch = async () => {
    const response = await apiRequest(
      "get",
      `products/search/${id}?name=${searchTerm}`
    );
    if (response.success === false) {
      setInfo("Error in Searching for products");
      setError(true);
    } else {
      setProducts(response.results);
      setTotalResults(response.count);
      setShowFilterSideBar(false);
    }
  };
  const min_max_price_in_store = async () => {
    const response = await apiRequest("get", `minmax_price/${id}`);
    if (response.success === false) {
      setInfo("Error in fetching Data");
      setError(true);
    } else {
      setPriceRange(response);
    }
  };
  const filterProducts = async () => {
    const response = await apiRequest(
      "get",
      `products/filter/${id}?price=${formData.price}&rating=${formData.rating}`
    );

    if (response.success === false) {
      setInfo("Error in fetching Data");
      setError(true);
    } else {
      setProducts(response.results);
      setTotalResults(response.count);
      setShowFilterSideBar(false);
    }
  };
  useEffect(() => {
    fetchProducts();
    min_max_price_in_store();
  }, [page]);
  useEffect(() => {
    setFormData({ ...formData, price: priceRange?.max_price });
  }, [priceRange]);
  return (
    <div>
      {loading ? (
        <LoadingCard text="Products" show={loading} />
      ) : (
        <>
          <InfoCard info={info} iserror={error} />

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
                <span className="font-bold">Search for products</span>

                <input
                  type="text"
                  className="p-4 border-2 border-black"
                  placeholder="name or category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SubmitButton
                  otherStyles={`bg-black mt-2`}
                  name={`Search`}
                  handleSubmit={submitSearch}
                />
                <span className="font-bold mt-4">Filter by price</span>
                <div className="flex flex-col  py-8 ">
                  <input
                    type="range"
                    value={formData.price}
                    onChange={handleChange}
                    className=""
                    name="price"
                    min={priceRange.min_price}
                    max={priceRange.max_price}
                  />
                  <div className="flex justify-between">
                    <span className="">{priceRange?.min_price}</span>
                    <span className="text-blue-500 font-bold">
                      {formData.price}
                    </span>
                    <span>{priceRange.max_price}</span>
                  </div>
                </div>
                <div className="my-2">
                  <span>
                    Rating{" "}
                    <input
                      type="number"
                      onChange={handleChange}
                      name="rating"
                      value={formData.rating > 5 ? 5 : formData.rating}
                      max={5}
                      min={0}
                      className="bg-gray-200 rounded-lg outline-none p-2 font-light"
                    />{" "}
                  </span>
                </div>
                <SubmitButton
                  otherStyles={`bg-green-500 rounded-xl my-2`}
                  name={`Apply filter`}
                  handleSubmit={filterProducts}
                />
                <SubmitButton
                  otherStyles={`bg-black rounded-xl my-2`}
                  name={`Clear filters`}
                  handleSubmit={()=>{fetchProducts() ,setShowFilterSideBar(false)} }
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
                <span> Showing  {totalResults} result</span>
              </div>
            </div>

            <div className="flex flex-col flex-wrap justify-center p-2">
              <div className="flex flex-wrap justify-center">
                {products.length >= 1 ? (
                  products.map((product) => (
                    <Product
                      handleClick={() =>
                        navigate(`/${id}/${name}/product/${product.id}`)
                      }
                      key={product.id}
                      product={product}
                    />
                  ))
                ) : (
                  <EmptyCard
                    text="No products found"
                    handleClick={() =>
                      searchTerm
                        ? setShowFilterSideBar(true)
                        : navigate("/stores")
                    }
                    btext={`${
                      searchTerm ? "Change Search" : "Visit other stores"
                    }`}
                  />
                )}
              </div>

              {products.length >= 1 && (
                <div className=" flex justify-center  items-center max-sm:mx-8 mx-28 font-light ">
                  <button
                    onClick={prevPage}
                    className=" m-2 max-sm:p-2 hover:bg-gray-200   p-4 rounded-lg"
                  >
                    Previous
                  </button>
                  <span className="m-2">{page} of {Math.ceil(totalResults / 6)}</span>
                  <button
                    onClick={nextPage}
                    className=" m-2 max-sm:p-2 hover:bg-gray-200   px-8 p-4 rounded-lg"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
