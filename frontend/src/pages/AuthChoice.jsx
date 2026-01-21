import { useNavigate } from "react-router-dom";
import "./AuthChoice.css";

export default function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome 👋</h1>
        <p className="auth-subtitle">
          Please login or create an account to continue
        </p>

        <div className="auth-buttons">
          <button className="btn btn-login" onClick={() => navigate("/login")}>
            Login
          </button>

          <button
            className="btn btn-signup"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
