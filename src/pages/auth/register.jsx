import React, { useEffect, useState } from "react";
import useFormHandler from "../../handlers/useFormHandler";
import images from "../../constants/images";
import GoogleButton from "../../components/GoogleButton";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorCard from "../../components/ErrorCard";
import { getAuthUser, register } from "../../utils/authentication";
import { useGlobalContext } from "../../context/GlobalProvider";
import Loading from "../OnBoarding/loading";

const Register = () => {
  const navigate = useNavigate();
  const [formData, handleChange] = useFormHandler({
    username: "",
    email: "",
    password: "",
  });
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [authError, setAuthError] = useState(null);
  const { IsLoggedIn, loading, setIsLoggedIn, setUserInfo } =
    useGlobalContext();
  useEffect(() => {
    if (!loading && IsLoggedIn) {
      navigate("/");
    }
  }, [IsLoggedIn, navigate, loading]);

  const handleSubmit = async () => {
    if (
      !formData.email.trim() ||
      !formData.username.trim() ||
      !formData.password
    ) {
      setAuthError("Username , Email and password must be filled");
      return;
    }
    try {
      await register(formData);
      const response = await getAuthUser();
      setUserInfo(response.data);
      setIsLoggedIn(true);
      navigate(from, { replace: true });

    } catch (error) {
      if (error.response) {
        if (error.response.data.email || error.response.data.username) {
          setAuthError("User with this email or username already exist");
        } else {
          setAuthError("An unknown error occurred. Please try again later.");
        }
      } else {
        setAuthError("Network error. Try again");
      }
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex h-screen ">
        <div className="max-sm:hidden w-1/2 h-full bg-orange-400 flex flex-col justify-center items-center">
          <div>
            <img src={images.logo} className="w-full" />
          </div>
          <div className="font-semibold text-lg italic ">
            <span>E-Commerce Made Easy - Start, Sell, Succeed</span>
          </div>
        </div>
        <div className="max-sm:bg-orange-400 max-sm:w-full w-1/2 h-full flex flex-col justify-center items-center ">
          <div className="max-sm:w-90%  w-80%  shadow-custom  max-sm:bg-white flex flex-col jus items-center   rounded-md p-5">
            <img src={images.logo} className="w-24" />
            <GoogleButton setAuthError={setAuthError} name={`Sign Up with Google`} />
            {authError && (
              <ErrorCard
                setAuthError={setAuthError}
                otherStyles={`w-80% m-3 p-4 rounded-md`}
                error={authError}
              />
            )}
            <FormField
              handleChange={handleChange}
              otherStyles={`w-80% max-sm:w-full m-2`}
              placeholder={`Your Username`}
              type={`text`}
              name={`username`}
            />
            <FormField
              handleChange={handleChange}
              otherStyles={`w-80% max-sm:w-full m-2`}
              placeholder={`Your Email`}
              type={`email`}
              name={`email`}
            />
            <FormField
              handleChange={handleChange}
              otherStyles={`w-80% max-sm:w-full m-2`}
              placeholder={`Your Password`}
              type={`password`}
              name={`password`}
            />
            <SubmitButton otherStyles={'w-80% bg-orange-400'} handleSubmit={handleSubmit} name={`Sign Up`} />
            <div className="max-sm:w-full w-80% m-2 ">
              <span>
                Already have an account?
                <span
                  className="text-orange-400 p-1 font-bold hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
