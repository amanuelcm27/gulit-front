import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../constants/images";
import SubmitButton from "./SubmitButton";

const EmptyCard = ({ styles, text, handleClick, btext }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` ${styles} m-4 p-2 flex flex-col justify-center items-center`}
    >
      <img src={images.empty} className="w-[400px] h-[400px] " />
      <div className="text-xl m-2">{text}</div>
      <SubmitButton
        name={btext}
        handleSubmit={handleClick}
        otherStyles={`bg-black text-white px-12`}
      />
    </div>
  );
};

export default EmptyCard;
