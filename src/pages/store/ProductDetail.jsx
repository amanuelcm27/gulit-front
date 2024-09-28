import React, { useEffect, useRef } from "react";
import StoreNavBar from "../../components/StoreNavBar";
import StoreFooter from "../../components/StoreFooter";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import Product from "../../components/Product";
import QuantityCounter from "../../components/QuantityCounter";

const ProductDetail = () => {
  const imageRef = useRef(null); 

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

  return (
    <div>
      <StoreNavBar />
      <div className=" m-10 max-sm:m-4">
        <div className="flex max-sm:flex-col max-sm:h-auto h-[550px]">
          <div className="w-1/2 max-sm:w-full max-sm:h-[400px] h-full">
            <div
              ref={imageRef} // Set the ref to the div
              style={{ "--image-url": `url(${images.brand})` }}
              className="w-full h-full  bg-[length:100%] bg-no-repeat hover:bg-[length:175%] bg-[image:var(--image-url)]"
            ></div>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div className="flex flex-col max-sm:m-0 max-sm:p-0 m-4 p-4 h-full">
              <span className="font-extrabold text-4xl max-sm:text-2xl max-sm:font-light">Product Name</span>
              <span className="font-light text-2xl max-sm:mt-2 mt-8"> <span className="text-gray-400 line-through px-2">$89</span>$60</span>
              <div className="font-light mt-8 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis doloribus ex quo officia animi quia nesciunt asperiores
                molestiae ratione soluta exercitationem reiciendis commodi nobis
                repellat, porro eaque inventore natus? Pariatur? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolores nesciunt
                animi aspernatur nulla, inventore voluptatem perferendis? Ullam
                quidem cum odit fugiat temporibus numquam, voluptatum nihil
                perspiciatis repudiandae deleniti reiciendis eveniet.
              </div>
              <div className="flex mt-auto max-sm:mt-12 ">
                <QuantityCounter otherStyles={`p-4`}/>
                <SubmitButton
                  name="Add to cart"
                  otherStyles={`bg-black mx-2`}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            inventore sed voluptates qui nisi nostrum voluptatum perferendis
            quos quasi possimus consectetur, vero amet nobis esse soluta minima!
            Doloribus, nemo magnam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Minima debitis expedita nemo culpa aspernatur
            consectetur similique maiores ut consequuntur doloremque nesciunt
            maxime iusto sint, reiciendis at suscipit voluptate aperiam.
            Doloremque. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. In amet quasi minus numquam laudantium. Eius necessitatibus
            voluptates ducimus blanditiis neque rerum? Quibusdam, ut voluptatem.
            Nesciunt tempora provident esse quibusdam quasi!
          </span>
        </div>
      </div>
      <div className="m-10 max-sm:m-2 ">
        <div className="flex flex-col max-sm:m-2  m-16">
          <span className="font-extrabold text-2xl max-sm:text-xl max-sm:font-light">Related products</span>
          <div className="flex max-sm:flex-col items-center ">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <StoreFooter />
    </div>
  );
};

export default ProductDetail;
