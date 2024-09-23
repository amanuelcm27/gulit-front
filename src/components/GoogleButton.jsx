import React from "react";
import images from "../constants/images";
import { useGoogleLogin } from "@react-oauth/google";
import { getAuthUser, signWithGoogle } from "../utils/authentication";
import { useGlobalContext } from "../context/GlobalProvider";

const GoogleButton = ({ name , setAuthError }) => {
  const { IsLoggedIn, loading, setIsLoggedIn, setUserInfo } =
    useGlobalContext();

  const loginGoogle = async (googleTokens) => {
    try {
      if (googleTokens) {
        await signWithGoogle(googleTokens);
        const response = await getAuthUser();
        setUserInfo(response.data);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      setAuthError("Unable to login with google. ");
    }
  };
  const login = useGoogleLogin({
    onSuccess: (googleToken) => loginGoogle(googleToken),
  });
  return (
    <div
      onClick={login}
      className="flex justify-center items-center w-80% max-sm:w-full active:translate-y-1 active:bg-orange-400 bg-gray-100 transition-all duration-300 rounded-md cursor-pointer "
    >
      <img src={images.googleLogo} className="w-5 " />
      <span className="p-3">{name}</span>
    </div>
  );
};

export default GoogleButton;
