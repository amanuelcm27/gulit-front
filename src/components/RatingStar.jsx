import React from "react";

const RatingStar = ({rating, handleStarClick}) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            index < rating ? "text-orange-300" : "text-gray-300"
          } cursor-pointer`}
          onClick={() => handleStarClick ? handleStarClick(index)  : ''}
        ></i>
      ))}
    </>
  );
};

export default RatingStar;
