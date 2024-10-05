import React from "react";
const SubmitButton = ({ handleSubmit, name, otherStyles, back }) => {
  return (
    <button
      onClick={handleSubmit}
      className={`max-sm:w-full group p-4 text-white active:translate-y-1 transition-all duration-200 font-semibold rounded-sm ${otherStyles}`}
    >
      {back ? (
        <>
          <i className="fa-solid fa-angles-left opacity-0 group-hover:-translate-x-2 group-hover:opacity-100 transition-all duration-300 transform translate-x-0"></i>
          {name}
        </>
      ) : (
        <>
          {name}
          <i className="fa-solid fa-angles-right opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2"></i>
        </>
      )}
    </button>
  );
};


export default SubmitButton;
