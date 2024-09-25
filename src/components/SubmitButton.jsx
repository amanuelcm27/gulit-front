import React from "react";

const SubmitButton = ({ handleSubmit , name  , otherStyles}) => {
  return (
    <button onClick={handleSubmit} className={`max-sm:w-full  p-4 text-white active:translate-y-1 transition-all duration-200 font-psemibold  rounded-sm ${otherStyles}  `}>
      {name}
    </button>
  );
};

export default SubmitButton;
