import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalProvider";
import {
  getAuthUser,
  login,
  logout,
  signWithGoogle,
} from "../../utils/authentication";
import Loading from "../OnBoarding/loading";

const Login = () => {
  const navigate = useNavigate();
  const { IsLoggedIn, loading  , setIsLoggedIn , setUserInfo} = useGlobalContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (!loading && IsLoggedIn) {
      navigate("/");
    }
  }, [IsLoggedIn, navigate , loading]);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await login(formData.email, formData.password);
6
    } catch (error) {
      console.log(error);
    }
  };
  const loginGoogle = async (googleTokens) => {
    try {
      if (googleTokens) {
        await signWithGoogle(googleTokens);
        const response  = await getAuthUser();   
        setUserInfo(response.data)   
        setIsLoggedIn(true);

      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-4xl flex items-center flex-col justify-center font-semibold bg-orange-400 h-screen ">
      <GoogleLogin 
      className= 'w-full p-32'
        onSuccess={(credentialResponse) => {
          loginGoogle(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          onChange={handleForm}
          type="email"
          name="email"
          className="p-4 m-4"
          placeholder="email"
        />
        <input
          onChange={handleForm}
          type="password"
          name="password"
          className="p-4"
          placeholder="password"
        />
        <button className="p-5 bg-orange-300 m-4"> SIGN IN </button>
      </form>

    </div>
  );
};

export default Login;
