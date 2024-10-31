import React, { useEffect, useState } from "react";
import FormField from "../../components/FormField";
import { apiRequest } from "../../handlers/apiHandler";
import useFormHandler from "../../handlers/useFormHandler";
import SubmitButton from "../../components/SubmitButton";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";
import PaymentMethodForm from "../../components/PaymentMethodForm";

const PaymentMethod = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");
  const [infokey, setInfoKey] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [showpaymentForm, setShowPaymentForm] = useState(false);

  const checkPaymentMethod = async () => {
    setLoading(true);
    const response = await apiRequest("get", "get_payment_method/");
    if (response.success === false) {
      console.log(response);
    } else {
      if (response.payment_method_set === false) {
        setShowPaymentForm(true);
      } else {
        setPaymentMethod(response);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    checkPaymentMethod();
  }, []);
  return (
    <>
      <InfoCard iserror={error} info={info} infokey={infokey} />
      <div className=" w-[85%] relative">
        <LoadingCard show={loading} text="payment method" />

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
      </div>
    </>
  );
};

export default PaymentMethod;
