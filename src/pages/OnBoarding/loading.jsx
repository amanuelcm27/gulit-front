import React from "react";
import images from "../../constants/images";
 


const Loading = () => {
  return (
    <div className=" text-4xl flex flex-col items-center justify-center font-semibold  h-screen  ">
      <img src={images.logo} />
    </div>
  );
};

export default Loading;
