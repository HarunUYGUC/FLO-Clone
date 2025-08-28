import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Woman from "./pages/Woman";
import Man from "./pages/Man";
import Child from "./pages/Child";
import OrderTracking from "./pages/OrderTracking";
import Payment from "./pages/Payment";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const location = useLocation();

  const [wishlistItems, setWishlistItems] = useState(() => {
    const localData = localStorage.getItem("wishlistItems");
    return localData ? JSON.parse(localData) : [];
  });

  const [basketItems, setBasketItems] = useState(() => {
    const localData = localStorage.getItem("basketItems");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!token);
    if (user) setLoggedInUser(user);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const handleAddToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems(prevItems => [...prevItems, product]);
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const handleAddToBasket = (product) => {
    if (!basketItems.find(item => item.id === product.id)) {
      setBasketItems(prevItems => [...prevItems, product]);
    }
  };

  const handleRemoveFromBasket = (productId) => {
    setBasketItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    localStorage.removeItem("wishlistItems");
    localStorage.removeItem("basketItems");
    setLoggedInUser(null);
    setIsLoggedIn(false);
    setWishlistItems([]);
    setBasketItems([]);
  };

  const handleClearBasket = () => {
    setBasketItems([]);
    localStorage.removeItem("basketItems");
  };

  return (
    <div className="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        wishlistCount={wishlistItems.length}
        basketCount={basketItems.length}
        handleLogout={handleLogout}
      />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList addToWishlist={handleAddToWishlist} addToBasket={handleAddToBasket} />} />
          <Route path="/products/:category" element={<ProductList addToWishlist={handleAddToWishlist} addToBasket={handleAddToBasket} />} />
          <Route path="/products/detail/:id" element={<ProductDetail addToWishlist={handleAddToWishlist} addToBasket={handleAddToBasket} />} />
          <Route path="/kadin" element={<Woman />} />
          <Route path="/erkek" element={<Man />} />
          <Route path="/cocuk" element={<Child />} />
          <Route path="/basket" element={<Basket basketItems={basketItems} handleRemoveFromBasket={handleRemoveFromBasket} />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/payment" element={<Payment clearBasket={handleClearBasket} />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route
            path="/wishlist"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Wishlist 
                  wishlistItems={wishlistItems} 
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                  addToBasket={handleAddToBasket} 
                />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </div>

      {location.pathname !== "/basket" && <Footer />}
    </div>
  );
}
