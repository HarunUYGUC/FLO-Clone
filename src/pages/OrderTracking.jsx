import React, { useState } from 'react';

const OrderTracking = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  const handleSendCode = () => {
    alert('Doğrulama kodu gönderiliyor...');
  };

  return (
    <div className="container-fluid d-flex justify-content-center py-2">
      <div className="w-100" style={{ maxWidth: '700px' }}>
        {/* Başlık Kartı */}
        <div className="card border-0 shadow-sm rounded-0 rounded-top">
          <div className="card-header bg-white border-0 py-3">
            <h2 className="fs-5 mb-0 text-dark">SİPARİŞ DURUM SORGULAMA</h2>
          </div>
        </div>

        {/* Ana Form Kartı - Üstten boşluk eklenmiş hali */}
        <div className="card border-0 shadow-sm rounded-0 rounded-bottom mt-4"> 
          <div className="card-body p-4">
            <p className="text-dark mb-4">
              Siparişiniz hakkında bilgi almak istiyorsanız lütfen aşağıdaki alana siparişinizde kullanmış olduğunuz
              telefon numarasını ve sonrasında telefonunuza gelen doğrulama kodunu giriniz.
            </p>

            {/* Cep Telefonu Satırı */}
            <div className="row g-3 mb-3 align-items-center">
              <div className="col-lg-6">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Cep Telefonu"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <small className="text-muted d-block">
                  Sadece rakamlardan oluşan başında 0 (sıfır) bulunmayan 10 haneli numara. Örn: 5324445566
                </small>
              </div>
            </div>

            {/* Sipariş Numarası Satırı */}
            <div className="row g-3 mb-4 align-items-center">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sipariş Numarası"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <small className="text-muted d-block">
                  Lütfen sipariş numaranızı giriniz.
                </small>
              </div>
            </div>

            {/* Buton Satırı */}
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className="btn w-100 text-white fw-bold py-3"
                  style={{ backgroundColor: '#FF6600', borderRadius: '10px' }}
                  onClick={handleSendCode}
                >
                  DOĞRULAMA KODUNU GÖNDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
