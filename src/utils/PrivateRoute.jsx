import { Outlet, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import Loading from "../pages/OnBoarding/loading";
const PrivateRoute = () => {
  const { IsLoggedIn, loading } = useGlobalContext();
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};
export default PrivateRoute;
