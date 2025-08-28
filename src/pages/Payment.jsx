import { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payment({ clearBasket }) { 
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Sahte ödeme işlemini taklit etme
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // %70 başarı olasılığı
      setPaymentSuccess(isSuccess);
      setIsProcessing(false);

      if (isSuccess) {
        clearBasket();
      }
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="card payment-card shadow-lg">
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4 fw-bold">Ödeme Ekranı</h2>
          
          {paymentSuccess === null && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Kart Numarası</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardName" className="form-label">Kart Üzerindeki İsim</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row mb-4">
                <div className="col-6">
                  <label htmlFor="expiryDate" className="form-label">Son Kullanma Tarihi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="AA/YY"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="cvc" className="form-label">CVC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    placeholder="XXX"
                    required
                  />
                </div>
              </div>
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  disabled={isProcessing}
                >
                  {isProcessing ? "İşlem yapılıyor..." : "Ödeme Yap"}
                </button>
              </div>
            </form>
          )}

          {paymentSuccess !== null && (
            <div className="text-center mt-4">
              {paymentSuccess ? (
                <>
                  <h4 className="text-success mb-3">Ödeme Başarılı! 🎉</h4>
                  <p>Siparişiniz tamamlandı. Teşekkür ederiz.</p>
                </>
              ) : (
                <>
                  <h4 className="text-danger mb-3">Ödeme Başarısız! 😥</h4>
                  <p>Kart bilgilerinizle ilgili bir sorun oluştu. Lütfen tekrar deneyin.</p>
                </>
              )}
              <Link to="/" className="btn btn-outline-primary mt-3">Anasayfaya Dön</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
