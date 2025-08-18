import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordToggleIcon({ show, onToggle }) {
  return (
    <span
      onClick={onToggle}
      style={{
        position: "absolute",
        right: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "#666",
        zIndex: 10,
      }}
    >
      {show ? <FaEye /> : <FaEyeSlash />}
    </span>
  );
}
