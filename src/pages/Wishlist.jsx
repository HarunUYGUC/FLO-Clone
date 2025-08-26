import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Wishlist({ wishlistItems, handleRemoveFromWishlist, addToBasket }) {
  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-4">Favorilerim</h1>
        <div className="alert alert-info text-center" role="alert">
          Favori listeniz şu anda boş. Ürünleri favorilerinize eklemek için <Link to="/products" className="alert-link">buraya tıklayın</Link>.
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Favorilerim ({wishlistItems.length} Ürün)</h1>
      <div className="row g-4">
        {wishlistItems.map((product) => (
          <div key={product.id} className="col-12">
            <div className="card shadow-sm">
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
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        <FaTrash /> Kaldır
                      </button>
                    </div>
                    <p className="card-text text-muted mb-auto">{product.category}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <h4 className="fw-bold text-dark mb-0">{product.price.toFixed(2)} ₺</h4>
                      <button 
                        className="btn btn-primary"
                        onClick={() => addToBasket(product)}
                      >
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
