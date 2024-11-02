import React, { useEffect, useState } from "react";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";
import PaymentMethodForm from "../../components/PaymentMethodForm";
import { usecheckStoreOwnership } from "../../handlers/checkOwnership";
import EmptyCard from "../../components/EmptyCard";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [infokey, setInfoKey] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [showpaymentForm, setShowPaymentForm] = useState(false);

  const checkPaymentMethod = async () => {
    setLoading(true);
    const response = await apiRequest("get", "get_payment_method/");
    if (response.success === false) {
      setError(true);
      setInfo("Couldn't load payment method");
    } else {
      if (response.payment_method_set === false) {
        setShowPaymentForm(true);
      } else {
        setPaymentMethod(response);
      }
      setLoading(false);
    }
  };
  const [ownsStore, loading, error, info, setInfo, setError, setLoading] =
    usecheckStoreOwnership(checkPaymentMethod);

  return (
    <>
      <InfoCard iserror={error} info={info} infokey={infokey} />
      <div className="  relative">
        <LoadingCard show={loading} text="payment method" />

        {ownsStore ? (
          <div className="m-8">
            {showpaymentForm ? (
              <PaymentMethodForm
                setError={setError}
                setInfo={setInfo}
                infokey={infokey}
                setInfoKey={setInfoKey}
                setLoading={setLoading}
                setShowPaymentForm={setShowPaymentForm}
                checkPaymentMethod={checkPaymentMethod}
              />
            ) : (
              <div>
                <span className="text-2xl font-extrabold">
                  Your payment method
                </span>
                <div key={paymentMethod?.id} className="flex flex-col my-4">
                  <span className="font-bold">Business Name</span>
                  <span className="p-4 m-2 bg-gray-100 rounded-xl">
                    {paymentMethod?.business_name}
                  </span>
                  <span className="font-bold">Bank Name</span>
                  <span className="p-4 m-2 bg-gray-100 rounded-xl">
                    {paymentMethod?.bank_name}
                  </span>
                  <span className="font-bold">Account Name</span>
                  <span className="p-4 m-2 bg-gray-100 rounded-xl">
                    {paymentMethod?.account_name}
                  </span>
                  <span className="font-bold">Account Number</span>
                  <span className="p-4 m-2 bg-gray-100 rounded-xl">
                    {paymentMethod?.account_number}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <EmptyCard
            styles=" w-full h-full "
            text="You don't own a store yet"
            btext="Create Store"
            handleClick={() => navigate("/admin/theme")}
          />
        )}
      </div>
    </>
  );
};

export default PaymentMethod;
