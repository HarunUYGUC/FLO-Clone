import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaStore, FaUndo, FaTruck, FaPhoneAlt, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container py-5">
        <div className="row text-custom">
          
          {/* Sol Kısım */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-2">Hakkımızda</h5>
            <hr className="custom-divider" />
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {["Kolay İade", "Müşteri Hizmetleri", "İade ve Değişim", "Güvenli Alışveriş Kılavuzu", "Tıkla Gel Al", "Ayakkabı Bakım Rehberi", "Flotomic", "Blog", "Mobil Uygulamalar", "Çerez Ayarları"].map(item => (
                    <li key={item} className="link-item">
                      <Link to="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {["Kampanyalar", "Mağazalarımız", "Sipariş Takibi", "İşlem Rehberi", "Kişisel Verilerin Korunması", "Kurumsal", "İnsan Kaynakları", "İletişim", "Kullanım Koşulları"].map(item => (
                    <li key={item} className="link-item">
                      <Link to="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobil Uygulama Butonları */}
            <div className="d-flex gap-2 mt-3">
              <a href="https://apps.apple.com/us/app/flo-ayakkabi/id889027386?mt=8" target="_blank" rel="noopener noreferrer"><img src="/google-play.svg" alt="Google Play" height="40" /></a>
              <a href="https://apps.apple.com/us/app/flo-ayakkabi/id889027386?mt=8" target="_blank" rel="noopener noreferrer"><img src="/app-store.svg" alt="App Store" height="40" /></a>
              <a href="https://apps.apple.com/us/app/flo-ayakkabi/id889027386?mt=8" target="_blank" rel="noopener noreferrer"><img src="/app-gallery.svg" alt="App Gallery" height="40" /></a>
            </div>
          </div>

          {/* Orta Kısım */}
        <div className="col-md-2 mb-4">
            <h5 className="mb-2">Takip Edin</h5>
            <hr className="custom-divider" />
            <ul className="list-unstyled d-flex flex-column gap-3 follow-list">
                <li>
                <a href="https://www.facebook.com/floayakkabi" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2">
                    <span className="icon-circle"><FaFacebookF /></span>Flo Facebook</a>
                </li>
                <li>
                <a href="https://x.com/floayakkabi" target="_blank" rel="noopener noreferrer"
                 className="d-flex align-items-center gap-2">
                    <span className="icon-circle"><FaTwitter /></span>Flo X</a>
                </li>
                <li>
                <a href="https://tr.pinterest.com/flomagazacilik/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2">
                    <span className="icon-circle"><FaPinterestP /></span>Flo Pinterest</a>
                </li>
                <li>
                <a href="https://www.instagram.com/floayakkabi/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2">
                    <span className="icon-circle"><FaInstagram /></span>Flo Instagram</a>
                </li>
                <li>
                <a href="https://www.youtube.com/user/floayakkabi" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2">
                    <span className="icon-circle"><FaYoutube /></span>Flo Youtube</a>
                </li>
            </ul>
        </div>

          {/* Sağ Kısım */}
          <div className="col-md-6">
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaStore size={30} />
              <p><strong>FLO Pazaryeri</strong><br/>Binlerce ürün yelpazemizle, müşterilerimize rekabetçi ve uygun fiyatlar sunuyoruz.</p>
            </div>
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaUndo size={30} />
              <p><strong>Kolay İade</strong><br/>flo.com.tr’den almış olduğunuz ve hiç kullanmadığınız ürünleri iade süresi içinde iade edebilirsiniz.</p>
            </div>
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaTruck size={30} />
              <p><strong>Kargo Bedava</strong><br/>FLO satıcısına özel 1750 TL ve üzeri alışverişlerinizde ve satıcılarımızın farklı sepet tutarlarına göre KARGO BEDAVA.</p>
            </div>
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaPhoneAlt size={30} />
              <p><strong>Çağrı Merkezi</strong><br/>Müşteri hizmetlerimiz çağrılarınıza haftanın 7 günü 08.00 - 30.00 saatleri arasında hizmet vermektedir.</p>
            </div>
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaCreditCard size={30} />
              <p><strong>6 Taksit Seçeneği</strong><br/>Yapacağınız tüm alışverişlerde Kredi Kartlarına 6 taksit avantajı.</p>
            </div>
            <div className="mb-4 d-flex gap-3 custom-box">
              <FaShieldAlt size={30} />
              <p><strong>Güvenli Alışveriş</strong>
                <br/>Dünyanın en popüler ve güvenilir yöntemiyle ödeme yapın.
                <div className="d-flex gap-4 mt-3">
                    <a href="https://www.guvendamgasi.org.tr/firmadetay.php?Guid=e31668f2-4360-11ea-8718-48df373f4850" target="_blank" rel="noopener noreferrer">
                        <img src="/tr-go.png" alt="TR GO" height="70" />
                    </a>
                    <a href="https://etbis.ticaret.gov.tr/" target="_blank" rel="noopener noreferrer">
                        <img src="/etbis.jpeg" alt="ETBİS" height="70" />
                    </a>
                </div>
              </p>
            </div>
          </div>
          
            {/* Alt Kısım: Taksit ve Telif */}
            <p className="mb-2 mt-4 fw-bold">6 Aya Varan Taksit Seçenekleri</p>
            <div className="footer-bottom text-center">
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-2">
                    <img src="/footer-bankcard.png" alt="Footer Bankcard" height="30" />
                    <img src="/footer-payment_2.png" alt="Footer Payment 2" height="30" />
                </div>
            </div>
            <p className="mb-0 fw-bold">© 2025 FLO.COM.TR. TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </div>
    </footer>
  );
}
