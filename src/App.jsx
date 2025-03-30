import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import ElectricityCost from "./pages/dashboard/ElectricityCost";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { getCurrentUserApiCall } from "./api/users.api";
import { setFetchingUser } from "./redux/slices/utilitySlice";
import { ACCESS_TOKEN } from "./config/constants";
import Chatbot from "./pages/dashboard/Chatbot";
import Products from "./pages/Products";
import ProductSingle from "./pages/ProductSingle";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./components/products/hooks/useCart";
import Orders from "./pages/dashboard/Orders";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(setUser(null));
  localStorage.clear();
  return <Navigate to="/login" />;
};

const LogoutAndSignup = () => {
  const dispatch = useDispatch();
  dispatch(setUser(null));
  localStorage.clear();
  return <Signup />;
};

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    // if there is no token we do not need to get the instance of the user
    if (!token) return;
    dispatch(setFetchingUser(true));
    try {
      const response = await getCurrentUserApiCall();
      if (response.success) {
        dispatch(setUser(response.data.user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setFetchingUser(false));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Toaster position="right-top" />
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<LogoutAndSignup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductSingle />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoutes>
                  <Cart />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoutes>
                  <Checkout />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<ResetPassword />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/dashboard/electricity-cost"
              element={
                <ProtectedRoutes>
                  <ElectricityCost />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/dashboard/chatbot"
              element={
                <ProtectedRoutes>
                  <Chatbot />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/dashboard/my-orders"
              element={
                <ProtectedRoutes>
                  <Orders />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
