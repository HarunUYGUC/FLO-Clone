import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Basket() {
  const navigate = useNavigate();

  return (
    <div className="container text-center" style={{ marginTop: "50px" }}>
      {/* Sepet İkon */}
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
        onClick={() => navigate("/")}
      >
        ALIŞVERİŞE BAŞLA
      </button>
    </div>
  );
}
