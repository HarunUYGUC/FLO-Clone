import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars, FaChevronRight } from 'react-icons/fa';

export default function MobileNavbar({ isMobileMenuOpen, toggleMobileMenu, isLoggedIn, loggedInUser, handleLogout, wishlistCount, basketCount }) {
  const [showMobileUserMenu, setShowMobileUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowMobileUserMenu(!showMobileUserMenu);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-white p-3 border-bottom d-lg-none">
        <div className="container-fluid">
          {/* Hamburger Menu */}
          <button className="navbar-toggler p-0 border-0" type="button" onClick={toggleMobileMenu}>
            <FaBars size={20} />
          </button>

          {/* Logo */}
          <Link className="navbar-brand ms-4 me-auto d-flex align-items-center" to="/">
            <img src="/flo-logo.svg" alt="FLO Logo" style={{ height: "30px" }} />
          </Link>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            {isLoggedIn ? (
              <div className="user-icon-container" onClick={toggleUserMenu} style={{ position: 'relative' }}>
                <FaUser size={20} />
                {showMobileUserMenu && (
                  <div className="dropdown-menu-custom-mobile">
                    <div style={{ fontSize: "0.9rem", marginBottom: "5px", color: '#333' }}>
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
            ) : (
              <Link to="/login" className="text-dark">
                <FaUser size={20} />
              </Link>
            )}

            <Link to="/wishlist" className="text-dark position-relative">
              <FaHeart size={20} />
              {wishlistCount > 0 && (
                <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/basket" className="text-dark position-relative">
              <FaShoppingCart size={20} />
              {basketCount > 0 && (
                <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                  {basketCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container-fluid my-3 px-3 d-lg-none">
        <div className="d-flex align-items-center form-control border-warning p-2" style={{ height: '50px' }}>
          <FaSearch size={20} style={{ color: '#989A98' }} />
          <input 
            type="text" 
            className="form-control border-0 search-input" 
            placeholder="Ürün veya marka ara..." 
            style={{ height: '28px' }} 
          />
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <div className={`offcanvas offcanvas-start${isMobileMenuOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasNavbar">
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <Link className="offcanvas-logo" to="/" onClick={toggleMobileMenu}>
            <img src="/flo-logo.svg" alt="FLO Logo" style={{ height: "30px" }} />
          </Link>
          <button type="button" className="btn-close text-reset" onClick={toggleMobileMenu} aria-label="Kapat"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="d-flex flex-row justify-content-between gap-2 px-3 mb-3">
            <Link to="/kadin" style={{borderRadius: "5px"}} className="mobile-category-link-box">Kadın</Link>
            <Link to="/erkek" style={{borderRadius: "5px"}} className="mobile-category-link-box">Erkek</Link>
            <Link to="/cocuk" style={{borderRadius: "5px"}} className="mobile-category-link-box">Çocuk</Link>
          </div>
          
          <ul className="list-group list-group-flush mobile-menu-list">
            <li className="list-group-item">
              <Link to="/products/electronics" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/ayakkabi.jpg" alt="Ayakkabı" className="me-3" />
                  <span>Ayakkabı</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/products/jewelery" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/spor.jpg" alt="Spor" className="me-3" />
                  <span>Spor</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/products/men's clothing" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/giyim.jpg" alt="Giyim" className="me-3" />
                  <span>Giyim</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/products/women's clothing" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/canta-aksesuar.jpg" alt="Çanta ve Aksesuar" className="me-3" />
                  <span>Çanta ve Aksesuar</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/space" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/markalar.jpg" alt="Markalar" className="me-3" />
                  <span>Markalar</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/space" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/indirim.jpg" alt="İndirim" className="me-3" />
                  <span>İndirim</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/products" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <div className="d-flex align-items-center">
                  <img src="/tum-kategoriler.jpg" alt="Tüm Kategoriler" className="me-3" />
                  <span>Tüm Kategoriler</span>
                </div>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            
            <li className="list-group-item mobile-menu-divider"></li>
            
            <li className="list-group-item">
              <Link to="/login" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <span>Kuponlarım</span>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/order-tracking" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <span>Sipariş Takibi</span>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/login" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <span>Kolay İade</span>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/login" className="d-flex align-items-center justify-content-between text-dark text-decoration-none mobile-menu-item">
                <span>Müşteri Hizmetleri</span>
                <FaChevronRight size={14} className="text-muted" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
