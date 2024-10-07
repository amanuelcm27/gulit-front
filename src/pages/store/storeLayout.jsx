import React, { useEffect, useState } from "react";
import StoreNavBar from "../../components/StoreNavBar";
import StoreFooter from "../../components/StoreFooter";
import { Outlet, useParams } from "react-router-dom";
import { StoreProvider } from "../../context/StoreContext";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";

const StoreLayout = () => {
  const { storeid, store_name } = useParams();
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState([]);
  if (!storeid || !store_name) {
    return <Navigate to="/" />; // Redirect to a default route if params are missing
  }
  const fetchStore = async () => {
    const response = await apiRequest("get", `store/${storeid}/`);
    if (response.success === false) {
      setInfo("Couldn't load store");
      setError(true);
    } else {
      setLoading(false);
      setStore(response);
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);
  return (
    <StoreProvider value={store}>
      {loading ? (
        <div className="w-full h-screen">
          <LoadingCard text={"Store"} show={loading} />
        </div>
      ) : (
        <div className="flex flex-col min-h-[100vh]">
          <div className="flex-1">
            <StoreNavBar />
            <Outlet />
          </div>
          <div>
            <StoreFooter />
          </div>
        </div>
      )}
    </StoreProvider>
  );
};

export default StoreLayout;
