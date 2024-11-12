import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import Product from "../../components/Product";
import StoreNavBar from "../../components/StoreNavBar";
import StoreFooter from "../../components/StoreFooter";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../handlers/apiHandler";
import { useStoreContext } from "../../context/StoreContext";

const Home = () => {
  const { id, name, slogan, p_image_1, p_image_2 } = useStoreContext();
  const [featuredProducts, setfeaturedProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await apiRequest("get", `store/${id}/featured_products/`);
    if (response.success === false) {
      console.log('problem getting products');
    } else {
      setfeaturedProducts(response);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-[550px]">
        <div className="max-sm:block flex h-full items-center  max-sm:m-0 m-10 ">
          <div
            style={{ "--image-url": `url(${p_image_1})` }}
            className="max-sm:w-full w-1/2  flex flex-col bg-[image:var(--image-url)] bg-cover sm:bg-none  max-sm:h-full  "
          >
            <div className="max-sm:h-full flex flex-col justify-center max-sm:p-4 max-sm:bg-black max-sm:bg-opacity-40 ">
              <span className="max-sm:text-4xl max-sm:text-white text-7xl font-extrabold">
                {slogan}
              </span>
              <button
                onClick={() => navigate(`/${id}/${name}/products`)}
                className="group active:bg-slate-700 text-left text-white p-5 mt-5 font-extrabold bg-black w-1/2 max-sm:w-full"
              >
                Start Shopping
                <i className="fa-solid fa-cart-shopping opacity-0 group-hover:translate-x-2 group-hover:opacity-100  transition-all duration-300 transform translate-x-[-10px]"></i>
              </button>
            </div>
          </div>
          <div className="max-sm:hidden w-1/2 h-full overflow-hidden rounded-xl ">
            <img
              src={p_image_1}
              className="hover:scale-105 transition-all duration-300 object-contain w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] max-sm:h-full">
        <div className="text-center m-12">
          <span className="max-sm:text-4xl text-5xl font-extrabold">
            Featured products
          </span>
        </div>
        <div className=" flex max-sm:flex-col max-sm:m-4 m-12 justify-center items-center ">
          {featuredProducts?.map((product) => (
            <Product key={product.id} product={product} showPrice={false}  handleClick={()=>navigate(`/${id}/${name}/product/${product.id}`)} />
          ))}
        </div>
      </div>
      <div className=" max-sm:w-full  h-[100px] bg-black hover:bg-gray-900 max-sm:m-0 m-10 mx-16">
        <div className="flex h-full items-center justify-center m-10  text-white">
          <span className="flex-1 max-sm:text-sm text-xl font-extrabold">
            Get this limited time offer
          </span>
          <span
            onClick={() => navigate(`/${id}/${name}/products`)}
            className="font-bold  cursor-pointer  hover:translate-x-2 transition-all duration-200"
          >
            Order now <i className="fa-solid fa-angles-right"></i>
          </span>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${p_image_2})` }}
        className="  bg-cover  h-[550px] rounded-xl max-sm:m-4   m-24 mx-16"
      >
        <div className="w-full h-full flex flex-col justify-end rounded-xl bg-black bg-opacity-60">
          <div className="max-sm:text-4xl text-7xl font-bold text-white mx-10">
            <span>Explore more products </span>
          </div>
          <div className="max-sm:text-lg text-xl text-white font-light mx-10">
            <span>
              we have products curated to your needs discounts will not remain
              for long
            </span>
          </div>
          <div className="group flex hover:bg-gray-900 cursor-pointer bg-black w-1/4 max-sm:w-1/2  max-sm:m-10 max-sm:px-4 m-10 p-4 text-2xl font-bold text-white rounded-lg">
            <span
              onClick={() => navigate(`/${id}/${name}/products`)}
              className="flex-1"
            >
              Shop now
              <i className="fa-solid fa-angles-right opacity-0 group-hover:translate-x-2 group-hover:opacity-100  transition-all duration-300 transform translate-x-[-10px]"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
