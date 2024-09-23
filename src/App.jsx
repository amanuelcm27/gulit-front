import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OnBoarding from "./pages/OnBoarding/onBoarding";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
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
