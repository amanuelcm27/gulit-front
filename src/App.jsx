import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OnBoarding from "./pages/OnBoarding/onBoarding";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Role from "./pages/OnBoarding/Role";
import Home from "./pages/store/Home";
import Products from "./pages/store/Products";
import ProductDetail from "./pages/store/ProductDetail";
import Cart from "./pages/store/Cart";
import Checkout from "./pages/store/Checkout";
import StoreOnBoarding from "./pages/admin/StoreOnBoarding";
function App() {
  const [count, setCount] = useState(0);
  const OauthId = import.meta.env.VITE_OAUTH_CLIENT_ID;
  return (
    <>
      <Router>
        <GlobalProvider>
          <GoogleOAuthProvider clientId={OauthId}>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>``
                <Route path="/" element={<OnBoarding />} />
                <Route path="/role" element={<Role />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />}></Route>
                <Route path="/product/" element={<ProductDetail />} ></Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/checkout" element={<Checkout />} ></Route>
                <Route path="/admin" element={<StoreOnBoarding />} ></Route>                

              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

            </Routes>
          </GoogleOAuthProvider>
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
