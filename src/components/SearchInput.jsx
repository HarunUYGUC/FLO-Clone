import { useEffect, useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ isMobile = false }) {
  const placeholders = useMemo(() => [
    "Aradığınız ürün, marka veya kategoriyi yazınız",
    "Örneğin: Terlik",
    "Örneğin: Nike",
    "Örneğin: Spor Ayakkabı",
    "Örneğin: Kinetix",
    "Örneğin: Babet",
    "Örneğin: Puma"
  ], []);

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = placeholders[currentIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      // Harf harf yaz.
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } 
      // Harf harf sil.
      else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } 
      // Yazma bitti, 1 saniye bekle, silmeye başla.
      else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      // Silme bitti, sonraki yazıya geç, yazmaya başla.
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % placeholders.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, placeholders]);

  return (
    <div className={isMobile ? "container-fluid my-3 px-3 d-lg-none" : "d-none d-lg-block"}>
      <div
        className="d-flex align-items-center form-control border-warning p-2"
        style={{
          height: "50px",
          width: isMobile ? "100%" : "650px"
        }}
      >
        <FaSearch size={20} style={{ color: "#989A98" }} />
        <input
          type="text"
          className="form-control border-0 search-input"
          placeholder={displayText}
          style={{ height: "28px" }}
        />
      </div>
    </div>
  );
}
