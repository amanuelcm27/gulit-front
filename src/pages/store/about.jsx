import React from "react";
import NavBar from "../../components/NavBar";
import images from "../../constants/images";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";

const About = ({ styles }) => {
  const navigate = useNavigate();
  const  { id  , name } = useStoreContext()
  return (
    <div>
      <div className="m-4">
        <div className="flex flex-col items-center  max-sm:m-2 m-10 h-full">
          <div className="flex flex-col justify-center items-center">
            <span className="text-7xl max-sm:text-4xl font-extrabold">
              About us
            </span>
            <div className="flex max-sm:flex-col max-sm:m-2 m-8">
              <div className="w-1/2 max-sm:w-full max-sm:text-left text-justify ">
                <span className="font-light  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum asperiores vitae ducimus repellendus, atque deleniti
                  laborum ipsam Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolorem maxime facilis, sit illo doloremque
                  adipisci corporis labore. Delectus, unde eum accusantium,
                  possimus doloremque nesciunt voluptatem Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Repudiandae in ut nihil
                  maiores beatae eum eligendi sed accusantium nostrum illum, ad
                  quae odio cum ipsa a deleniti autem facere harum., consectetur
                  illo fugiat ullam maiores. excepturi itaque veniam commodi,
                  illo voluptatum in recusandae sint repudiandae hic? Impedit,
                  iste. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Nulla, velit dicta quisquam soluta explicabo quas
                  laudantium maiores dolorum non tenetur, ad, voluptas
                  blanditiis cum! Officiis eius sunt saepe esse minus!
                </span>
              </div>
              <div className=" max-sm:hidden w-1/2  hover:scale-105 transition-all duration-200">
                <img
                  src={images.logo}
                  alt="about"
                  className="w-full h-[450px] object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <SubmitButton
              name="Visit our Store"
              handleSubmit={() => navigate(`/${id}/${name}/products`)}
              otherStyles={`bg-black text-white w-full px-12`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
