import React, { useState } from "react";

const useFormHandler = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const clearForm = () => {
    setFormData(initialValue);
  };
  return [formData, handleChange , clearForm ,setFormData];
};

export default useFormHandler;
