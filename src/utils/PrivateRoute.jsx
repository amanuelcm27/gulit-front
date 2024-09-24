import { Outlet, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import Loading from "../pages/OnBoarding/loading";
const PrivateRoute = () => {
  const { IsLoggedIn, loading } = useGlobalContext();
  if (loading) {
    return <Loading />; 
  }
  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;