import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
import "./ProductList.css";

export default function ProductList({ addToWishlist, addToBasket }) {
  const { category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ show: false, message: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://fakestoreapi.com/products";

        if (category) {
          const encodedCategory = encodeURIComponent(category);
          url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
        }
        
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Hata:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  
  if (loading) {
    return <p className="text-center my-5">Yükleniyor...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center my-5">Bu kategoriye ait ürün bulunamadı.</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning me-1 fs-6" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-warning me-1 fs-6" />);
    }

    return stars;
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setAlert({ show: true, message: 'Favorilere Eklendi' });
  };

  const handleAddToBasket = (product) => {
    addToBasket(product);
    setAlert({ show: true, message: 'Sepete Eklendi' });
  };

  return (
    <div className="container my-5">
      {alert.show && (
        <div className="alert-container">
          <div className="alert-message">{alert.message}</div>
        </div>
      )}
      <h1 className="text-center mb-4">{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Ürünleri` : "Tüm Ürünler"}</h1>
      <div className="row g-4 justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card product-card">
              
              {/* Favori ve Sepete Ekle Butonları */}
              <div className="card-header position-relative d-flex justify-content-between align-items-center bg-white border-0 p-3">
                <span className="badge bg-danger text-white fav-badge">
                  {Math.floor(Math.random() * 1000) + 100} kişi favoriledi!
                </span>
                <div className="d-flex ms-auto">
                  <button 
                    className="btn btn-light rounded-circle me-2 icon-btn d-flex justify-content-center align-items-center"
                    onClick={() => handleAddToWishlist(p)}
                  >
                    <FaHeart className="text-danger" />
                  </button>
                  <button 
                    className="btn btn-light rounded-circle icon-btn d-flex justify-content-center align-items-center"
                    onClick={() => handleAddToBasket(p)}
                  >
                    <FaShoppingCart className="text-success" />
                  </button>
                </div>
              </div>

              {/* Ürün Resmi ve Sol Altındaki İki Nokta */}
              <Link 
                to={`/products/detail/${p.id}`}
                state={{ from: location.pathname }} 
                className="text-decoration-none text-dark d-flex flex-column"
              >
                <div className="card-image-container d-flex justify-content-center align-items-center p-3">
                  <img src={p.image} className="card-img-top product-image" alt={p.title} />
                  <div className="color-variants">
                    <span className="color-dot bg-danger"></span>
                    <span className="color-dot bg-secondary"></span>
                  </div>
                </div>

                {/* Ürün Açıklamaları */}
                <div className="card-body text-start d-flex flex-column justify-content-between flex-grow-1">
                  {/* Ürün Başlığı, Kategorisi ve Yıldızı */}
                  <div>
                    <h5 className="card-title fw-bold text-truncate">{p.title}</h5>
                    <p className="card-text text-muted mb-1 text-truncate">{p.category}</p>
                    <div className="d-flex align-items-center mb-2">
                      <span className="star-rating">
                        {renderStars(p.rating.rate)}
                      </span>
                      <span className="ms-2 text-muted rating-count">({p.rating.count})</span>
                    </div>
                  </div>

                  {/* Eski Fiyat ve Fiyat Uyarısı */}
                  <div>
                    <div className="price-info mb-2">
                      <p className="text-success fw-bold mb-0">Son 30 Günün En Düşük Fiyatı</p>
                      <span className="text-decoration-line-through text-muted me-2">{(p.price * 1.5).toFixed(2)} ₺</span>
                    </div>

                    {/* Fiyat ve İndirim Oranı */}
                    <div className="d-flex align-items-center justify-content-between">
                      <strong className="fs-4 fw-bold text-dark">{p.price.toFixed(2)} ₺</strong>
                      <span className="badge bg-danger">
                        % -{(100 - (p.price / (p.price * 1.5)) * 100).toFixed(0)}
                      </span>
                    </div>

                    {/* Kupon ve 360° Görünüm Etiketleri */}
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <span className="badge border border-secondary text-secondary coupon-tag">Kupon Fırsatı</span>
                      <span className="badge border border-secondary text-secondary coupon-tag">360° Görünüm</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
