import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as bootstrap from "bootstrap";
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import "./Navbar.css";

export default function Navbar({ isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setLoggedInUser(username);
      setIsLoggedIn(true);
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("token", "dummy-token");
      setUsername("");
      setPassword("");
      const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
      modal.hide();
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    setLoggedInUser(null);
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sepet sayfasında farklı navbar
  if (location.pathname === "/basket") {
    return (
      <div 
        className="py-4" 
        style={{ 
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <img
              className="me-4"
              src="/flo-logo.svg"
              alt="FLO Logo"
              style={{ height: "40px" }}
            />
          </Link>
          <div className="d-flex align-items-center gap-1">
            <img
              src="/secure-icon.png"
              alt="Secure"
              style={{ width: "30px", height: "30px" }}
            />
            <span style={{ color: "#111111", fontWeight: "bold" }}>
              Güvenli Alışveriş ve Ödeme
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <DesktopNavbar
        isLoggedIn={isLoggedIn}
        loggedInUser={loggedInUser}
        showLoginMenu={showLoginMenu}
        setShowLoginMenu={setShowLoginMenu}
        handleLogout={handleLogout}
      />
      <MobileNavbar
        isLoggedIn={isLoggedIn}
        loggedInUser={loggedInUser}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleLogout={handleLogout}
      />

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giriş Yap</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mb-2" placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" className="form-control mb-2" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleLogin}>Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
