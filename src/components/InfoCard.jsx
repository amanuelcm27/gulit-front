import React, { useEffect, useState } from "react";

const InfoCard = ({ info, iserror , infokey }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (info) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [info , infokey]); 

  return (
    <div
      className={`fixed w-full h-[100px] top-0 left-0 bg-white bg-opacity-85 z-50 flex items-center justify-center transition-transform duration-500 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`${
          iserror ? "bg-red-600" : "bg-green-400"
        } text-white font-bold shadow-lg p-4 rounded-xl`}
      >
        <i className="fa-solid fa-circle-check"></i> {info}
      </div>
    </div>
  );
};

export default InfoCard;
