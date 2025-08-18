import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { FaArrowLeft } from "react-icons/fa";
import { loginUser, registerUser } from "../api/auth";
import PasswordToggleIcon from "../components/PasswordToggleIcon";
import "./Login.css";

export default function Login({ setIsLoggedIn, setLoggedInUser }) {
  const [activeTab, setActiveTab] = useState("login");
  const [step, setStep] = useState(1); // 1 = email, 2 = password
  const [username, setUsername] = useState(""); // login e-posta
  const [password, setPassword] = useState(""); // login şifre
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Register sekmesi state'leri
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
      if (location.state.activeTab === "login") {
        setStep(1);
        setUsername("");
        setPassword("");
      }
    }
  }, [location.state]);

  const handleNext = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Lütfen e-posta veya telefon giriniz.");
    } else {
      setError("");
      setStep(2);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email: username, password });
      localStorage.setItem("token", data.token || "fake-jwt-token");
      localStorage.setItem("loggedInUser", username);
      setIsLoggedIn(true);
      setLoggedInUser(username);
      navigate("/products");
    } catch (err) {
      setError(err.message || "Kullanıcı adı veya şifre yanlış.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({
        email: registerEmail,
        password: registerPassword,
        firstName,
        lastName,
      });
      alert(`Kullanıcı oluşturuldu: ${data.email}`);
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("loggedInUser", data.email);
      setIsLoggedIn(true);
      setLoggedInUser(data.email);
      navigate("/products");
    } catch (err) {
      alert(err.message || "Kayıt işlemi başarısız.");
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
                    <label htmlFor="username">E-Posta Adresi</label>
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
                <form style={{ padding: "15px" }} onSubmit={handleLogin}>
                  <div className="form-floating mb-3" style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Şifre"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Şifre</label>

                    <PasswordToggleIcon show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
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

              {error && <p className="text-danger ms-3">{error}</p>}

              <SocialLogin />

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
            </>
          )}

          {activeTab === "register" && (
            <form onSubmit={handleRegister} style={{ padding: "15px" }}>
              {/* Ad */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Ad"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label htmlFor="firstName">Ad</label>
              </div>

              {/* Soyad */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Soyad"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label htmlFor="lastName">Soyad</label>
              </div>

              {/* E-Posta */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  placeholder="E-Posta"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
                <label htmlFor="registerEmail">E-Posta Adresi</label>
              </div>

              {/* Şifre */}
              <div className="form-floating mb-3" style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="registerPassword"
                  placeholder="Şifre"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
                <label htmlFor="registerPassword">Şifre</label>

                <PasswordToggleIcon show={showPassword} onToggle={() => setShowPassword(!showPassword)} />

                <div
                  className="form-text"
                  style={{ color: "#9A9A9A", fontSize: "0.8rem" }}
                >
                  Lütfen en az 8 karakter, 1 büyük harf ve 1 rakam giriniz.
                </div>
              </div>

              {/* Cinsiyet seçimi */}
              <div className="d-flex justify-content-around my-3">
                <button
                  type="button"
                  className="btn w-50 me-2"
                  onClick={() => setGender("kadın")}
                  style={{
                    backgroundColor: gender === "kadın" ? "#FFF7F4" : "#fff",
                    border: `2px solid ${
                      gender === "kadın" ? "#FF6600" : "#ccc"
                    }`,
                    color: "#9A9A9A",
                    padding: "11px 0",
                  }}
                >
                  KADIN
                </button>
                <button
                  type="button"
                  className="btn w-50"
                  onClick={() => setGender("erkek")}
                  style={{
                    backgroundColor: gender === "erkek" ? "#FFF7F4" : "#fff",
                    border: `2px solid ${
                      gender === "erkek" ? "#FF6600" : "#ccc"
                    }`,
                    color: "#9A9A9A",
                    padding: "11px 0",
                  }}
                >
                  ERKEK
                </button>
              </div>

              {/* Checkbox alanları */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox1"
                  style={{ transform: "scale(1.4)", marginRight: "8px" }}
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox1"
                  style={{ fontSize: "0.7rem", color: "#524952" }}
                >
                  Kimlik ve iletişim verilerimin tercih ettiğim iletişim bilgilerime
                  reklam, promosyon, vb. ticari elektronik ileti gönderilmesi amacıyla
                  işlenmesini kabul ediyorum.
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                  style={{ transform: "scale(1.4)", marginRight: "8px" }}
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox2"
                  style={{ fontSize: "0.7rem", color: "#524952" }}
                >
                  Kimlik, iletişim, müşteri işlem ve pazarlama verilerimin profilleme ve
                  analiz faaliyetleri dahil doğrudan pazarlama, şirketiniz tarafından
                  sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıkları ve
                  ihtiyaçlarıma göre özelleştirilerek önerilmesi ve tanıtılması amacıyla
                  işlenmesini kabul ediyorum.
                </label>
              </div>

              {/* Bilgilendirme metni */}
              <p style={{ fontSize: "0.8rem", color: "#9A9A9A" }}>
                Kişisel verileriniz FLO Mağazacılık ve Pazarlama Anonim Şirketi tarafından
                işlenmesine yönelik bilgilere{" "}
                <a
                  href="https://www.flo.com.tr/aydinlatma-metni"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9A9A9A" }}
                >
                  Aydınlatma Metni
                </a>{" "}
                üzerinden ulaşabilirsiniz. “Üye Ol” butonuna basarak{" "}
                <a
                  href="https://www.flo.com.tr/uyelik-sozlesmesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9A9A9A" }}
                >
                  Üyelik Sözleşmesi
                </a>
                ’ni kabul ediyorsunuz.
              </p>

              {/* Üye Ol butonu */}
              <button
                type="submit"
                className="btn w-100 mb-4"
                style={{
                  backgroundColor: "#ff6600",
                  color: "#fff",
                  padding: "12px",
                  fontSize: "1rem",
                }}
              >
                ÜYE OL
              </button>

              <SocialLogin />
            </form>
          )}
        </div>

        <div className="d-flex align-items-center justify-content-center mt-5">
          <img src="/secure-icon.png" alt="Secure" style={{ width: "50px", height: "50px" }} />
          <span style={{ color: "#28A74B" }}>Güvenli Alışveriş</span>
        </div>
      </div>
    </div>
  );
}
