import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OnBoarding from "./pages/OnBoarding/onBoarding";
import PrivateRoute from "./utils/PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import Theme from "./pages/admin/Theme";
import StoreProducts from "./pages/admin/StoreProducts";
import Analytics from "./pages/admin/Analytics";
import Orders from "./pages/admin/Orders";
import Coupon from "./pages/admin/Coupon";
import AdminDashboard from "./pages/admin/AdminDashboard";
import About from "./pages/store/about";
import StoreLayout from "./pages/store/storeLayout";
import CustomerDashBoard from "./pages/Customer/CustomerDashBoard";
import CustomerOrders from "./pages/Customer/CustomerOrders";
import CustomerDetails from "./pages/Customer/CustomerDetails";
import Stores from "./pages/OnBoarding/Stores";
import NotFound from "./pages/default/NotFound";
import PaymentMethod from "./pages/admin/Payment";
import PaymentVerify from "./pages/store/PaymentVerify";
function App() {
  const OauthId = import.meta.env.VITE_OAUTH_CLIENT_ID;
  return (
    <>
      <Router>
        <GlobalProvider>
          <GoogleOAuthProvider clientId={OauthId}>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/role" element={<Role />} />

                <Route element={<CustomerDashBoard />} path="/customer">
                  <Route index element={<Navigate to="/customer/orders" />} />
                  <Route path="orders" element={<CustomerOrders />} />
                  <Route path="details" element={<CustomerDetails />} />
                </Route>
                <Route path="/admin" element={<AdminDashboard />}>
                  <Route index element={<Navigate to="/admin/products" />} />
                  <Route
                    path="onboarding"
                    element={<StoreOnBoarding />}
                  ></Route>
                  <Route path="theme" element={<Theme />}></Route>
                  <Route path="products" element={<StoreProducts />}></Route>
                  <Route path="coupon" element={<Coupon />}></Route>
                  <Route path="orders" element={<Orders />}></Route>
                  <Route path="analytics" element={<Analytics />}></Route>
                  <Route path="payment_method" element={<PaymentMethod />}></Route>

                </Route>
                <Route path="/verify_payment" element = {<PaymentVerify />}/>
              </Route>

              <Route path="/:storeid/:store_name/" element={<StoreLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />}></Route>
                <Route path="product/:productId" element={<ProductDetail />} />
                <Route path="about" element={<About />} />
                <Route element={<PrivateRoute />}>
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
              </Route>
              <Route index path="/" element={<OnBoarding />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GoogleOAuthProvider>
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
