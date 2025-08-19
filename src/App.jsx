import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Woman from "./pages/Woman";
import Man from "./pages/Man";
import Child from "./pages/Child";
import Shoes from "./pages/Shoes";
import Sports from "./pages/Sports";
import Clothing from "./pages/Clothing";
import BagsAccessories from "./pages/BagsAccessories";
import Brands from "./pages/Brands";
import Discounts from "./pages/Discounts";
import AllCategories from "./pages/AllCategories";
import OrderTracking from "./pages/OrderTracking";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!token);
    if (user) setLoggedInUser(user);
  }, []);

  return (
    <div className="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/kadin" element={<Woman />} />
          <Route path="/erkek" element={<Man />} />
          <Route path="/cocuk" element={<Child />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/ayakkabi" element={<Shoes />} />
          <Route path="/spor" element={<Sports />} />
          <Route path="/giyim" element={<Clothing />} />
          <Route path="/canta-aksesuar" element={<BagsAccessories />} />
          <Route path="/markalar" element={<Brands />} />
          <Route path="/indirim" element={<Discounts />} />
          <Route path="/tum-kategoriler" element={<AllCategories />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
