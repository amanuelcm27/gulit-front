import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuthUser } from "../utils/authentication";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const get_user = async () => {
    try {
      const response = await getAuthUser();
      if (response.data.authenticated) {
        setIsLoggedIn(true);
        setUserInfo(response.data);
      } else {
        setUserInfo(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };
  let context = {
    userInfo,
    IsLoggedIn,
    setIsLoggedIn,
    loading,
    setIsLoading,
    setUserInfo,
  };
  useEffect(() => {
    get_user();
  }, []);
  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
export default GlobalProvider;
