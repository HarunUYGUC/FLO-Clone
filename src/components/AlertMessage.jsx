import { useEffect } from "react";

export default function AlertMessage({ alert, setAlert }) {
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [alert, setAlert]);

  if (!alert.show) return null;

  return (
    <div className="alert-container">
      <div className="alert-message">{alert.message}</div>
    </div>
  );
}
