import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF, FaArrowLeft } from "react-icons/fa";
import "./Login.css";

export default function Login({ setIsLoggedIn, setLoggedInUser }) {
  const [activeTab, setActiveTab] = useState("login");
  const [step, setStep] = useState(1); // 1 = email, 2 = password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Lütfen e-posta veya telefon giriniz.");
    } else {
      setError("");
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("loggedInUser", username);
      setIsLoggedIn(true);
      setLoggedInUser(username);
      navigate("/products");
    } else {
      setError("Kullanıcı adı veya şifre yanlış.");
    }
  };

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "500px" }}>
        {/* Üst mesaj alanı */}
        <div className="text-center mb-4 position-relative">
          {step === 2 ? (
            <>
              <FaArrowLeft
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                onClick={() => setStep(1)}
              />
              <h4>Hoş Geldiniz</h4>
            </>
          ) : (
            <>
              <h4>Merhaba,</h4>
              <p className="text-muted">
                <strong>Giriş yap</strong> veya <strong>Hesap Oluştur</strong>, fırsatları
                kaçırma!
              </p>
            </>
          )}
        </div>

        {/* Giriş Yap - Üye Ol sekmeleri */}
        <div
          style={{
            backgroundColor: "#F2F2F2",
            padding: "6px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          className="d-flex justify-content-between"
        >
          <button
            style={{ padding: "15px 0" }}
            className={`flex-fill btn tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Giriş Yap
          </button>
          <button
            className={`flex-fill btn tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Üye Ol
          </button>
        </div>

        {/* Form alanı */}
        <div style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }} className="border p-4">
          {activeTab === "login" && (
            <>
              {step === 1 && (
                <form style={{ padding: "15px" }} onSubmit={handleNext}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="E-Posta Adresi veya Telefon"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="username">E-Posta Adresi veya Telefon</label>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 mb-3"
                    style={{ backgroundColor: "#ff6600", color: "#fff", padding: "10px" }}
                  >
                    GİRİŞ YAP
                  </button>
                </form>
              )}

              {step === 2 && (
                <form style={{ padding: "15px" }} onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Şifre"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Şifre</label>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 mb-3"
                    style={{ backgroundColor: "#ff6600", color: "#fff" }}
                  >
                    GİRİŞ YAP
                  </button>
                </form>
              )}

              {/* Sosyal giriş butonları */}
              <div style={{ padding: "0 15px" }} className="d-flex gap-2 mb-2">
                <button
                  className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
                  style={{ height: "45px" }}
                >
                  <FaGoogle className="me-2 text-danger" style={{ color: "#DB4437", fontSize: "1.5rem" }} />
                  Google ile Giriş Yap
                </button>
                <button
                  className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
                  style={{ height: "45px" }}
                >
                  <FaApple className="me-2" style={{ color: "#000000", fontSize: "1.5rem" }} />
                  Apple ile Giriş Yap
                </button>
                <button
                  className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
                  style={{ height: "45px" }}
                >
                  <FaFacebookF className="me-2" style={{ color: "#1877F2", fontSize: "1.5rem" }} />
                  Facebook ile Giriş Yap
                </button>
              </div>

              {/* Bilgilendirme metinleri */}
              <p style={{ fontSize: "0.8rem", padding: "0 15px", color: "#9A9A9A" }}>
                Kişisel verileriniz{" "}
                <a href="https://www.flo.com.tr/aydinlatma-metni" 
                  style={{ color: "#9A9A9A" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aydınlatma Metni
                </a>{" "}
                uyarınca işlenecektir. Üçüncü taraf hesabınızla giriş yapmanız halinde{" "}
                <a href="https://www.flo.com.tr/uyelik-sozlesmesi" 
                  style={{ color: "#9A9A9A" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Üyelik Sözleşmesi
                </a>{" "}
                uygulanacaktır.
              </p>

              {error && <p className="text-danger">{error}</p>}
            </>
          )}

          {activeTab === "register" && (
            <div className="text-center text-muted">
              <p>Üye ol formu buraya gelecek.</p>
            </div>
          )}

        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <img
            src="/secure-icon.png"
            alt="Secure"
            style={{ width: "50px", height: "50px" }}
          />
          <span style={{ color: "#28A74B" }}>Güvenli Alışveriş</span>
        </div>
      </div>
    </div>
  );
}
