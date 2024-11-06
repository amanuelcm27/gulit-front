import React, { useEffect, useState } from "react";
import { apiRequest } from "../handlers/apiHandler";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

const PaymentMethodForm = ({
  setLoading,
  setInfo,
  setError,
  infokey,
  setInfoKey,
  setShowPaymentForm,
  checkPaymentMethod,
}) => {
  const [banks, setBanks] = useState([]);
  const [formData, setFormData] = useState({
    business_name: "",
    account_name: "",
    bank_code: "",
    account_number: "",
    bank_name: "",
  });
  const fetchBanks = async () => {
    const response = await apiRequest("get", "banks/");
    if (response.success === false) {
      console.log("Couldn't load banks");
      setLoading(false)
    } else {
      setBanks(response.data);
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "bank_code") {
      const selectedBank = banks.find(
        (bank) => bank.id.toString() === value.toString()
      );
      setFormData({
        ...formData,
        bank_code: value,
        bank_name: selectedBank ? selectedBank.name : "", // Set bank_name based on selected bank
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const formValid = () => {
    if (
      formData.business_name === "" ||
      formData.account_name === "" ||
      formData.bank_code === "" ||
      formData.account_number === "" ||
      formData.bank_name === ""
    ) {
      setError(true);
      setInfo("All fields are required");
      setLoading(false);
      return false;
    }
    return formData;
  };
  const createPaymentMethod = async () => {
    setLoading(true);
    const validatedForm = formValid();
    if (validatedForm) {
      const response = await apiRequest(
        "post",
        "create_payment_method/",
        validatedForm
      );
      if (response.success === false) {
        setLoading(false);
        setError(true);
        setInfo("Wrong account number or already used ");
      } else {
        setLoading(false);
        setError(false);
        setInfo("Payment method created successfully");
        setTimeout(() => {
          setShowPaymentForm(false);
          checkPaymentMethod();
        } , 500);
      }
    }
    setInfoKey(infokey + 1);
  };
  useEffect(() => {
    fetchBanks();
  }, []);
  return (
    <>
      <span className="text-2xl font-extrabold">Setup your payment method</span>
      <div className="text-red-400 bg-gray-100 rounded-lg p-4 my-4">
        <i className="fa-solid fa-circle-exclamation text-orange-400"></i>
        <span className="px-4">
          Attention this step is very essential your customers will pay you
          through the method you use here
        </span>
      </div>
      <div className="flex flex-col mt-8">
        <div className="w-full">
          <span>Business name </span>
          <FormField
            name="business_name"
            type="text"
            placeholder="Your Business name"
            otherStyles="bg-gray-400"
            value={formData?.business_name}
            handleChange={handleChange}
          />
        </div>

        <div className="flex flex-col my-8">
          <span>Choose your prefered payment method </span>

          <select
            id="bankSelect"
            name="bank_code"
            value={formData?.bank_code}
            onChange={handleChange}
            className="w-full outline-none py-4 hover:bg-gray-100 cursor-pointer"
          >
            <option value="" disabled>
              Select a bank
            </option>
            {banks?.map((bank) => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex ">
          <div className="w-full ">
            <span>Account name </span>
            <FormField
              name="account_name"
              type="text"
              placeholder="Your Account Name"
              value={formData?.account_name}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mx-4">
            <span>
              Account Number (or Mobile number if you choose a wallet)
            </span>
            <FormField
              name="account_number"
              type="number"
              placeholder="Your Account Number"
              value={formData?.account_number}
              handleChange={handleChange}
            />
          </div>
        </div>
        <SubmitButton
          name="Save"
          otherStyles="bg-orange-400 w-1/4 my-4"
          handleSubmit={createPaymentMethod}
        />
      </div>
    </>
  );
};

export default PaymentMethodForm;
