import "./ProductDetail.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);

        const simRes = await fetch(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(data.category)}`
        );
        let simData = await simRes.json();

        simData = simData.filter((p) => p.id !== data.id);
        setSimilarProducts(simData);
      } 
      catch (err) {
        console.error("Ürün detayı alınırken hata oluştu:", err);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!product || !product.id) {
    return <h2>Ürün bulunamadı.</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Kategori:</strong> {product.category}</p>
      <p><strong>Fiyat:</strong> {product.price} ₺</p>
      <p><strong>Açıklama:</strong> {product.description}</p>
      <Link to="/products">← Ürün listesine dön</Link>

      <h3>Benzer Ürünler</h3>
      {similarProducts.length === 0 && <p>Benzer ürün bulunamadı.</p>}
      <ul className="similar-products-list">
        {similarProducts.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
