export function useProductActions(isLoggedIn, addToWishlist, addToBasket, setAlert) {
  const handleAddToWishlist = (product) => {
    if (!isLoggedIn) {
      setAlert({ show: true, message: "Lütfen giriş yapın!" });
      return;
    }
    addToWishlist(product);
    setAlert({ show: true, message: "Favorilere Eklendi" });
  };

  const handleAddToBasket = (product) => {
    if (!isLoggedIn) {
      setAlert({ show: true, message: "Lütfen giriş yapın!" });
      return;
    }
    addToBasket(product);
    setAlert({ show: true, message: "Sepete Eklendi" });
  };

  return { handleAddToWishlist, handleAddToBasket };
}
