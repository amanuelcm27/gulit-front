import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCard = ({ styles, text, goto, btext }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` ${styles} m-4 p-2 flex flex-col justify-center items-center`}
    >
      <img src={images.empty} className="w-full " />
      <div className="text-xl">{text}</div>
      <SubmitButton
        name={btext}
        handleSubmit={() => navigate(goto)}
        otherStyles={`bg-black text-white px-12`}
      />
    </div>
  );
};

export default EmptyCard;
