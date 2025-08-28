import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Basket({ basketItems, handleRemoveFromBasket }) {
  const navigate = useNavigate();

  if (!basketItems || basketItems.length === 0) {
    return (
      <div className="container text-center" style={{ marginTop: "50px" }}>
        {/* Sepet İkonu */}
        <div
          style={{
            backgroundColor: "#FF6600",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <FaShoppingCart size={50} />
        </div>

        {/* Başlık */}
        <h2 style={{ fontSize: "1rem", marginBottom: "15px" }}>
          Sepetinizde ürün bulunmamaktadır.
        </h2>

        {/* Açıklama */}
        <p style={{ fontSize: "0.9rem" }}>
          <span style={{ color: "#FF6600", fontWeight: "bold" }}>FLO</span>
          <span style={{ color: "#6E737C" }}>’da binlerce ürün ve model seni bekliyor.</span>
        </p>

        {/* Alışverişe Başla Butonu */}
        <button
          className="btn"
          style={{
            backgroundColor: "#FF6600",
            color: "#fff",
            padding: "13px 25px",
            border: "none",
            borderRadius: "10px",
            width: "300px",
          }}
          onClick={() => navigate("/products")}
        >
          ALIŞVERİŞE BAŞLA
        </button>
      </div>
    );
  }

  const totalAmount = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Sepetim ({basketItems.length} Ürün)</h1>
      <div className="row">
        <div className="col-lg-8">
          {basketItems.map((product) => (
            <div key={product.id} className="card shadow-sm mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex justify-content-center align-items-center p-3">
                  <img src={product.image} className="img-fluid rounded-start" alt={product.title} style={{ maxHeight: '150px', objectFit: 'contain' }} />
                </div>
                <div className="col-md-9">
                  <div className="card-body d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold">{product.title}</h5>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemoveFromBasket(product.id)}
                      >
                        <FaTrash /> Kaldır
                      </button>
                    </div>
                    <p className="card-text text-muted mb-auto">{product.category}</p>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                      <h4 className="fw-bold text-dark mb-0">{product.price.toFixed(2)} ₺</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">Sipariş Özeti</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Ürünler ({basketItems.length})</span>
              <span>{totalAmount.toFixed(2)} ₺</span>
            </div>
            <div className="d-flex justify-content-between mb-2 fw-bold">
              <span>Toplam Tutar</span>
              <span>{totalAmount.toFixed(2)} ₺</span>
            </div>
            <Link to="/payment" className="btn btn-primary w-100 mt-3" style={{ backgroundColor: "#FF6600", color: "#fff", borderColor: "#FF6600" }}>
              ÖDEMEYE GEÇ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
