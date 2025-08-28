import "./ProductDetail.css";
import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail({ addToWishlist, addToBasket }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);
  const [alert, setAlert] = useState({ show: false, message: '' });
  const location = useLocation();
  const from = location.state?.from || "/products";

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Ürün detayı alınırken hata oluştu:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      async function fetchSimilarProducts() {
        try {
          const res = await fetch(`https://fakestoreapi.com/products`);
          const allProducts = await res.json();
          const filteredProducts = allProducts.filter(
            (p) => p.category === product.category && p.id !== product.id
          );
          setSimilarProducts(filteredProducts.slice(0, 4));
        } catch (err) {
          console.error("Benzer ürünler alınırken hata oluştu:", err);
        } finally {
          setSimilarLoading(false);
        }
      }

      fetchSimilarProducts();
    }
  }, [product]);

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  if (loading) {
    return <p className="text-center my-5">Yükleniyor...</p>;
  }

  if (!product) {
    return <h2 className="text-center my-5">Ürün bulunamadı.</h2>;
  }

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
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={from} className="btn btn-outline-secondary">
            ← Ürün listesine dön
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid product-detail-image"
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="fw-bold">{product.title}</h1>
          <p className="lead text-muted">{product.category}</p>
          <hr />
          <h2 className="display-5 fw-bold text-primary my-3">
            {product.price.toFixed(2)} ₺
          </h2>
          <p className="card-text">{product.description}</p>
          <p>
            <strong>Puan:</strong> {product.rating.rate} ({product.rating.count}{" "}
            oy)
          </p>
          <div className="d-flex gap-3">
            <button 
              className="btn btn-lg btn-success mt-3 w-100"
              onClick={() => handleAddToBasket(product)}
            >
              Sepete Ekle
            </button>
            <button 
              className="btn btn-lg btn-danger mt-3 w-100"
              onClick={() => handleAddToWishlist(product)}
            >
              Favorilere Ekle
            </button>
          </div>
        </div>
      </div>

      {/* Benzer Ürünler */}
      <hr className="my-5" />
      <h3 className="mb-4">Benzer Ürünler</h3>
      {similarLoading ? (
        <p>Benzer ürünler yükleniyor...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {similarProducts.map((p) => (
            <div className="col" key={p.id}>
              <Link to={`/products/detail/${p.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "200px" }}>
                    <img
                      src={p.image}
                      className="card-img-top img-fluid"
                      alt={p.title}
                      style={{ maxHeight: "180px", width: "auto" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{p.title}</h5>
                    <p className="card-text text-muted mb-auto">
                      {p.category}
                    </p>
                    <p className="fs-5 fw-bold text-primary mt-2">
                      {p.price.toFixed(2)} ₺
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
