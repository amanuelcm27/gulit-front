import React, { useState } from "react";
import images from "../constants/images";

const FormField = ({ placeholder, type, value , name, handleChange, otherStyles }) => {
  const [borderColor, setBorderColor] = useState();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${otherStyles} flex items-center`}>
      <input
        className={`p-4 outline-none w-full h-full border-b-2 border-orange-100 ${borderColor} focus:border-b-orange-400`}
        placeholder={placeholder}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        name={name}
        value={value}
        onFocus={() => setBorderColor("")}
        onChange={(e) => handleChange(e)}
      />
      {type === "password" && (
        <img
          src={showPassword ? images.hidden : images.eye}
          onClick={() => setShowPassword(!showPassword)}
          className="w-5 cursor-pointer"
        />
      )}
    </div>
  );
};

export default FormField;
