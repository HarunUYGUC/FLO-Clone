import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div
        style={{ padding: "0 15px" }}
        className="d-flex gap-2 mb-2"
    >
        <button
        className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
        style={{ height: "45px" }}
        >
        <FaGoogle
            className="me-2"
            style={{ color: "#DB4437", fontSize: "1.5rem" }}
        />
        Google ile Giriş Yap
        </button>

        <button
        className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
        style={{ height: "45px" }}
        >
        <FaApple
            className="me-2"
            style={{ color: "#000000", fontSize: "1.5rem" }}
        />
        Apple ile Giriş Yap
        </button>

        <button
        className="btn btn-light border flex-fill d-flex align-items-center justify-content-center"
        style={{ height: "45px" }}
        >
        <FaFacebookF
            className="me-2"
            style={{ color: "#1877F2", fontSize: "1.5rem" }}
        />
        Facebook ile Giriş Yap
        </button>
    </div>
  );
}
