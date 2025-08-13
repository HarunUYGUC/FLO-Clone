import "./ProductList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } 
      catch (err) {
        console.error("Ürünler alınırken hata oluştu:", err);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="product-list">
      <h1>Ürün Listesi</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <span>{product.price} ₺</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
