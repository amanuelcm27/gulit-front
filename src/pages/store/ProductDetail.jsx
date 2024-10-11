import React, { useEffect, useRef, useState } from "react";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import Product from "../../components/Product";
import QuantityCounter from "../../components/QuantityCounter";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";
import { useGlobalContext } from "../../context/GlobalProvider";

const ProductDetail = () => {
  const imageRef = useRef(null);
  const navigate = useNavigate()
  const { IsLoggedIn } = useGlobalContext();
  const [info, setInfo] = useState(null);
  const [ infokey , setInfoKey ] = useState(0) // re-trigger effect for infocard
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const image = imageRef.current;
    const handleMouseMove = (e) => {
      const { offsetWidth: width, offsetHeight: height } = image;
      const { offsetX: mouseX, offsetY: mouseY } = e;
      let bgPosX = (mouseX / width) * 100;
      let bgPosY = (mouseY / height) * 100;
      image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    };
    const handleMouseLeave = () => {
      image.style.backgroundPosition = "center";
    };
    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const [quantity, setQuantity] = useState(1);
  const { storeid, productId } = useParams();
  const fetchProductDetail = async () => {
    const response = await apiRequest("get", `product/${storeid}/${productId}/`);
    if (response.success === false) {
      setInfo("couldn't load product");
      setError(true);
    } else {
      setLoading(false);
      setProduct(response);
    }
  };
  const addtocart = async () => {
    const response = await apiRequest("post", "add_to_cart/", {
      store_id: storeid,
      quantity: quantity,
      product_id: productId,
    });
    if (response.success === false) {
      setInfo("Error in adding to cart");
      setError(true);
      console.log(response);
    } else {
      if (response.message) {
        setInfo(response.message);
        setError(true)
      } else {
        setInfo("Added to cart");
      }
    }
    setInfoKey((prev)=>prev  + 1) 
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <>
      <InfoCard info={info} infokey={infokey} iserror={error} />
      <div className="relative">
        <LoadingCard text="Product" show={loading} />
        <div className=" m-10 max-sm:m-4">
          <div className="flex max-sm:flex-col max-sm:h-auto h-[550px]">
            <div className="w-1/2 max-sm:w-full max-sm:h-[400px] h-full">
              <div
                ref={imageRef} // Set the ref to the div
                style={{ "--image-url": `url(${product.image})` }}
                className="w-full h-full  bg-[length:100%] rounded-md bg-no-repeat hover:bg-[length:175%] bg-[image:var(--image-url)]"
              ></div>
            </div>
            <div className="w-1/2 max-sm:w-full">
              <div className="flex flex-col max-sm:m-0 max-sm:p-0 m-4 p-4 h-full">
                <span className="font-extrabold text-4xl max-sm:text-2xl max-sm:font-light">
                  {product.name}
                </span>
                <span className="font-light text-2xl max-sm:mt-2 mt-8">
                  <span className="text-gray-400 line-through px-2">
                  {product.discount}

                  </span>
                  {product.price}

                </span>
                <div className="font-light mt-8 text-justify">
                  {product.description}
                </div>
                <div className="flex mt-auto max-sm:mt-12 ">
                  <QuantityCounter
                    quantity={quantity}
                    max_quantity={product.quantity}
                    setQuantity={setQuantity}
                    otherStyles={`p-4`}
                  />
                  <SubmitButton
                    name="Add to cart"
                    otherStyles={`bg-black mx-2`}
                    handleSubmit={IsLoggedIn ? addtocart : () => navigate('/login')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 max-sm:hidden ">
          <div className="flex flex-col m-16">
            <span className="font-extrabold text-2xl">Description</span>
            <span className="font-light text-justify  ">
              {product.description}
            </span>
          </div>
        </div>
        <div className="m-10 max-sm:m-2 ">
          <div className="flex flex-col max-sm:m-2  m-16">
            <span className="font-extrabold text-2xl max-sm:text-xl max-sm:font-light">
              Related products
            </span>
            <div className="flex max-sm:flex-col items-center ">
              {/* <Product />
         */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
