import "./ProductDetail.css";
import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <p className="text-center my-5">Yükleniyor...</p>;
  }

  if (!product) {
    return <h2 className="text-center my-5">Ürün bulunamadı.</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={from} className="btn btn-outline-secondary">
            ← Ürün listesine dön
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={product.image} alt={product.title} className="img-fluid product-detail-image" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="fw-bold">{product.title}</h1>
          <p className="lead text-muted">{product.category}</p>
          <hr />
          <h2 className="display-5 fw-bold text-primary my-3">{product.price.toFixed(2)} ₺</h2>
          <p className="card-text">{product.description}</p>
          <p>
            <strong>Puan:</strong> {product.rating.rate} ({product.rating.count} oy)
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-lg btn-success mt-3 w-100">Sepete Ekle</button>
            <button className="btn btn-lg btn-danger mt-3 w-100">Favorilere Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
}
