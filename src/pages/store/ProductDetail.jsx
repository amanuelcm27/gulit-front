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
import useFormHandler from "../../handlers/useFormHandler";
import RatingStar from "../../components/RatingStar";
import { formatDate } from "../../utils/formatedDate";

const ProductDetail = () => {
  const imageRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { IsLoggedIn } = useGlobalContext();
  const [info, setInfo] = useState(null);
  const [infokey, setInfoKey] = useState(0); // re-trigger effect for infocard
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showRatingForm, setShowRatingForm] = useState(false);
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
  const { storeid, store_name, productId } = useParams();
  const fetchProductDetail = async () => {
    const response = await apiRequest(
      "get",
      `product/${storeid}/${productId}/`
    );
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
    } else {
      if (response.message) {
        setInfo(response.message);
        setError(true);
      } else {
        setInfo("Added to cart");
      }
    }
    setInfoKey((prev) => prev + 1);
  };
  useEffect(() => {
    fetchProductDetail();
    fetchReviews();
  }, [productId]);
  const [featuredProducts, setfeaturedProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await apiRequest(
      "get",
      `store/${storeid}/featured_products/`
    );
    if (response.success === false) {
      console.log("problem getting products");
    } else {
      setfeaturedProducts(response);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const [rating, setRating] = useState(0);
  const [formData, handleChange, clearForm] = useFormHandler({
    rating: rating,
    product_id: productId,
    store_id: storeid,
    comment: "",
  });
  const handleStarClick = (index) => {
    setRating(index + 1);
    handleChange({
      target: {
        type: "number",
        name: "rating",
        value: index + 1,
      },
    });
  };

  const rateProduct = async () => {
    const response = await apiRequest("post", "rate_product/", formData);
    if (response.success === false) {
      setError("Couldn't Rate Product");
    } else {
      setInfo(response);
      fetchReviews()
      setShowRatingForm(false);
    }
    setInfoKey(infokey + 1);
  };
  const fetchReviews = async () => {
    const response = await apiRequest(
      "get",
      `reviews/${storeid}/${productId}/`
    );
    if (response.success === false) {
      setError("Couldn't get Reviews");
    } else {
      setReviews(response);
    }
  };
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
                <div className="flex mt-4">
                  <RatingStar rating={product.rating} />
                </div>

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
                    handleSubmit={
                      IsLoggedIn ? addtocart : () => navigate("/login")
                    }
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
        <div className="m-10 max-sm:m-4">
          <div className="mx-16 max-sm:m-0 flex flex-col text-xl cursor-pointer font-extralight ">
            {IsLoggedIn && (
              <span
                onClick={() => setShowRatingForm(!showRatingForm)}
                className="pr-2 group font-bold"
              >
                {showRatingForm ? "Hide Rating" : "Rate this product"}
                <i className="fa-solid fa-angles-right opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2"></i>
              </span>
            )}
            {(IsLoggedIn && showRatingForm)  && (
              <div className="w-full">
                <div className="flex">
                  <RatingStar
                    rating={rating}
                    handleStarClick={handleStarClick}
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    onChange={handleChange}
                    value={formData.comment}
                    name="comment"
                    className="w-full h-[200px] p-2 outline-none resize-none border-2 rounded-lg "
                    placeholder="your review of this product ..."
                  ></textarea>
                </div>
                <SubmitButton
                  name="Rate product"
                  otherStyles="bg-black rounded-xl my-2"
                  handleSubmit={rateProduct}
                />
              </div>
            )}
            <div className="mt-10">
              <span>Reviews</span>
              <div className="flex flex-col">
                {reviews?.length > 0 ? (
                  reviews?.map((review) => (
                    <div
                      key={review.creator.username}
                      className="h-[150px] flex flex-col rounded-lg m-2"
                    >
                      <div className=" p-2 flex flex-col justify-center">
                        <span>{review.creator.username}</span>
                        <span className="text-sm text-gray-500">
                          {formatDate(review.created_at)}
                        </span>

                        <div className="flex">
                          <RatingStar rating={review.rating} />
                        </div>
                      </div>
                      <span className="bg-gray-50 font-light text-lg p-2 ">
                        {review.comment}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="h-[100px]  mt-4 flex flex-col items-center">
                    <span>No reviews yet . Be the first to review</span>
                    {
                      <button
                        onClick={() => IsLoggedIn ? setShowRatingForm(true) : navigate("/login" , {state : {from : location}} )}
                        className="bg-black text-white px-4 rounded-lg"
                      >
                        Review
                      </button>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 max-sm:m-2 ">
          <div className="flex flex-col max-sm:m-2  m-16">
            <span className="font-extrabold text-2xl max-sm:text-xl max-sm:font-light">
              Related products
            </span>
            <div className="flex max-sm:flex-col items-center justify-center">
              {featuredProducts?.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  handleClick={() =>
                    navigate(`/${storeid}/${store_name}/product/${product.id}`)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
