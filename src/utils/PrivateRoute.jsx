import { Outlet, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
const PrivateRoute = () => {
  const { IsLoggedIn } = useGlobalContext()
  const authenticated = IsLoggedIn ? true : false;
  return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;