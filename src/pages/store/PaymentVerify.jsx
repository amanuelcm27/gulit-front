import React, { useEffect, useState } from "react";
import LoadingCard from "../../components/LoadingCard";
import images from "../../constants/images";
import { apiRequest } from "../../handlers/apiHandler";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentVerify = () => {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [storeId, setStoreId] = useState("");
  const [storeName, setStoreName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const checkTransactionStatus = async (txRef) => {
    const response = await apiRequest("get", `transaction_status/${txRef}/`);
    if (response.status === "completed") {
      navigate("/customer/orders", { replace: true });
      setLoading(false);
    } else if (response.status === "failed") {
      setFailed(true);
      setLoading(false);
    } else {
      setTimeout(() => checkTransactionStatus(txRef), 2000);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const txRef = query.get("tx_ref");
    const id = query.get("store_id");
    const name = query.get("store_name");

    setStoreId(id);
    setStoreName(name);

    if (txRef) {
      checkTransactionStatus(txRef);
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col w-full h-screen justify-center items-center">
        {failed ? (
          <div className="flex flex-col items-center">
            <img src={images.logo} className="w-40 h-40" alt="Logo" />
            <span className="text-2xl font-extrabold">Payment has failed</span>
            <button
              onClick={() => navigate(`/${storeId}/${storeName}/cart`)}
              className="m-4 text-2xl font-extrabold text-white hover:bg-gray-800 p-4 rounded-full bg-black"
            >
              Try again
            </button>
          </div>
        ) : (
          <LoadingCard text="Payment status" show={loading} />
        )}
      </div>
    </>
  );
};

export default PaymentVerify;
