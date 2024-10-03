import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getAuthUser, login } from "../../utils/authentication";
import Loading from "../OnBoarding/loading";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";
import GoogleButton from "../../components/GoogleButton";
import useFormHandler from "../../handlers/useFormHandler";
import ErrorCard from "../../components/ErrorCard";

const Login = () => {
  const navigate = useNavigate();
  const { IsLoggedIn, loading, setIsLoggedIn, setUserInfo } =
    useGlobalContext();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const [formData, handleChange] = useFormHandler({
    email: "",
    password: "",
  });
  const [authError, setAuthError] = useState(null);
  useEffect(() => {
    if (!loading && IsLoggedIn) {
      navigate("/");
    }
  }, [IsLoggedIn, loading]);
  const handleSubmit = async () => {
    try {
      if (!formData.email.trim() || !formData.password) {
        setAuthError("Email and password must be filled");
        return;
      }
      await login(formData.email, formData.password);
      const response = await getAuthUser();
      setUserInfo(response.data);
      setIsLoggedIn(true);
      navigate(from, { replace: true });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setAuthError("Invalid Email or Password");
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
        <div className="max-sm:bg-orange-400 max-sm:w-full w-1/2 h-full flex flex-col justify-center items-center ">
          <div className="max-sm:w-90%  w-80%  shadow-custom  max-sm:bg-white flex flex-col jus items-center   rounded-md p-5">
            <img src={images.logo} className="w-24" />
            <GoogleButton
              setAuthError={setAuthError}
              name={`Sign in with google`}
            />
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
            <SubmitButton
              otherStyles={"w-80% bg-orange-400"}
              handleSubmit={handleSubmit}
              name={`Sign In`}
            />
            <div className="max-sm:w-full w-80% m-2 ">
              <span>
                Don't have an account ?{" "}
                <span
                  className="text-orange-400 p-1 font-bold hover:cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden w-1/2 h-full bg-orange-400 flex flex-col justify-center items-center">
          <div>
            <img src={images.logo} className="w-full" />
          </div>
          <div className="font-semibold text-lg italic ">
            <span>E-Commerce Made Easy - Start, Sell, Succeed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
