import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUser, FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import * as bootstrap from "bootstrap";
import DownloadNow from "./DownloadNow";
import "./Navbar.css";

export default function Navbar({ isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginMenu, setShowLoginMenu] = useState(false);
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
          {/* Sol Logo */}
          <Link to="/">
            <img
              className="me-4"
              src="/flo-logo.svg"
              alt="FLO Logo"
              style={{ height: "40px" }}
            />
          </Link>

          {/* Sağ Secure */}
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
      {/* Üst Bar */}
      <div className="py-2 small text-muted" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="container d-flex justify-content-between">
          <DownloadNow url="https://www.flo.com.tr/mobil-uygulamalar" />
          <div className="top-links">
            <Link to="/coupons" className="me-3 text-dark text-decoration-none">Kuponlarım</Link>
            <Link to="/order-tracking" className="me-3 text-dark text-decoration-none">Sipariş Takibi</Link>
            <Link to="/easy-return" className="me-3 text-dark text-decoration-none">Kolay İade</Link>
            <Link to="/customer-service" className="text-dark text-decoration-none">Müşteri Hizmetleri</Link>
          </div>
        </div>
      </div>

      {/* Orta Bar */}
      <div className="py-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container d-flex align-items-center justify-content-between">
          
          {/* Sol taraf: Logo + Menü + Arama */}
          <div className="d-flex align-items-center gap-4">
            <Link to="/">
              <img className="me-4" src="/flo-logo.svg" alt="FLO Logo" style={{ height: "40px" }} />
            </Link>

            <div className="d-flex gap-4 fw-semibold navbar-menu">
              <NavLink to="/kadin" className="text-dark text-decoration-none">Kadın</NavLink>
              <NavLink to="/erkek" className="text-dark text-decoration-none">Erkek</NavLink>
              <NavLink to="/cocuk" className="text-dark text-decoration-none">Çocuk</NavLink>
            </div>

            <div className="d-flex align-items-center form-control border-warning p-2" style={{ width: '650px', height: '50px' }}>
              <FaSearch size={20} style={{ color: '#989A98' }} />
              <input type="text" className="form-control border-0 search-input" placeholder="Ürün veya marka ara..." style={{ height: '28px' }} />
            </div>
          </div>

          {/* Sağ taraf: Kullanıcı / Favoriler / Hesabım / Sepet */}
          <div className="d-flex align-items-center gap-4">
            {isLoggedIn && loggedInUser ? (
              <>
                {/* Favorilerim */}
                <Link
                  to="/wishlist"
                  className="text-center text-dark text-decoration-none"
                >
                  <FaHeart size={25} />
                  <div style={{ fontSize: "0.8rem" }}>Favorilerim</div>
                </Link>

                {/* Hesabım (dropdown ile çıkış yap) */}
                <div className="text-center text-dark user-dropdown-wrapper position-relative">
                  <div
                    className="user-dropdown"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowLoginMenu(!showLoginMenu)}
                  >
                    <FaUser size={25} />
                    <div style={{ fontSize: "0.8rem" }}>Hesabım</div>
                  </div>

                  {showLoginMenu && (
                    <div className="dropdown-menu-custom">
                      <div style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
                        {loggedInUser}
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger w-100"
                        onClick={handleLogout}
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // giriş yapılmamışsa eski menü
              <div className="text-center text-dark user-dropdown-wrapper">
                <div
                  className="user-dropdown"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowLoginMenu(!showLoginMenu)}
                >
                  <FaUser size={25} />
                  <div style={{ fontSize: "0.8rem" }}>Giriş Yap</div>
                </div>

                <div
                  className="dropdown-menu-custom"
                  style={{ display: showLoginMenu ? "block" : "none" }}
                >
                  <Link
                    to="/login"
                    state={{ activeTab: "login" }}
                    className="btn w-100 mb-2"
                    style={{ backgroundColor: "#ff6600", color: "#fff" }}
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    to="/login"
                    state={{ activeTab: "register" }}
                    className="btn w-100"
                    style={{ backgroundColor: "#eaeaea", color: "#555" }}
                  >
                    Üye Ol
                  </Link>
                </div>
              </div>
            )}

            {/* Sepet */}
            <Link to="/basket" className="d-flex flex-column align-items-center text-dark text-decoration-none">
              <FaShoppingCart size={25} />
              <div style={{ fontSize: "0.8rem" }}>Sepetim</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Menü */}
      <div className="py-3" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="container d-flex justify-content-between fw-semibold navbar-submenu">
          <NavLink to="/ayakkabi" className="text-dark text-decoration-none">Ayakkabı</NavLink>
          <NavLink to="/spor" className="text-dark text-decoration-none">Spor</NavLink>
          <NavLink to="/giyim" className="text-dark text-decoration-none">Giyim</NavLink>
          <NavLink to="/canta-aksesuar" className="text-dark text-decoration-none">Çanta ve Aksesuar</NavLink>
          <NavLink to="/markalar" className="text-dark text-decoration-none">Markalar</NavLink>
          <NavLink to="/indirim" className="text-dark text-decoration-none">İndirim</NavLink>
          <NavLink to="/tum-kategoriler" className="text-dark text-decoration-none">Tüm Kategoriler</NavLink>
        </div>
      </div>

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
