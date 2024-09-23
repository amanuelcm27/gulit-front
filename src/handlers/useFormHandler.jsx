import React, { useState } from "react";

const useFormHandler = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return [formData, handleChange];
};

export default useFormHandler;
