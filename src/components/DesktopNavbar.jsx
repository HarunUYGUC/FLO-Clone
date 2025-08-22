import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import DownloadNow from './DownloadNow';

export default function DesktopNavbar({
  isLoggedIn,
  loggedInUser,
  showLoginMenu,
  setShowLoginMenu,
  handleLogout,
}) {
  return (
    <>
      {/* Üst Bar */}
      <div className="py-2 small text-muted d-none d-lg-block" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="container d-flex justify-content-between">
          <DownloadNow url="https://www.flo.com.tr/mobil-uygulamalar" />
          <div className="top-links">
            <Link to="/login" className="me-3 text-dark text-decoration-none">Kuponlarım</Link>
            <Link to="/order-tracking" className="me-3 text-dark text-decoration-none">Sipariş Takibi</Link>
            <Link to="/login" className="me-3 text-dark text-decoration-none">Kolay İade</Link>
            <Link to="/login" className="text-dark text-decoration-none">Müşteri Hizmetleri</Link>
          </div>
        </div>
      </div>

      {/* Ana Navbar */}
      <div className="py-4 d-none d-lg-block" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container d-flex align-items-center justify-content-between">
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

          <div className="d-flex align-items-center gap-4">
            {isLoggedIn && loggedInUser ? (
              <>
                <Link to="/wishlist" className="text-center text-dark text-decoration-none">
                  <FaHeart size={25} />
                  <div style={{ fontSize: "0.8rem" }}>Favorilerim</div>
                </Link>

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
            
            <Link to="/basket" className="d-flex flex-column align-items-center text-dark text-decoration-none">
              <FaShoppingCart size={25} />
              <div style={{ fontSize: "0.8rem" }}>Sepetim</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Menü */}
      <div className="py-3 d-none d-lg-block" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="container d-flex justify-content-between fw-semibold navbar-submenu">
          <NavLink to="/products/electronics" className="text-dark text-decoration-none">Ayakkabı</NavLink>
          <NavLink to="/products/jewelery" className="text-dark text-decoration-none">Spor</NavLink>
          <NavLink to="/products/men's clothing" className="text-dark text-decoration-none">Giyim</NavLink>
          <NavLink to="/products/women's clothing" className="text-dark text-decoration-none">Çanta ve Aksesuar</NavLink>
          <NavLink to="/space" className="text-dark text-decoration-none">Markalar</NavLink>
          <NavLink to="/space" className="text-dark text-decoration-none">İndirim</NavLink>
          <NavLink to="/products" className="text-dark text-decoration-none">Tüm Kategoriler</NavLink>
        </div>
      </div>
    </>
  );
}
