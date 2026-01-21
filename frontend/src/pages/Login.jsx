import api from "../api";
import "../App.css";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await api.post("/auth/login", {
      email: form.email.value,
      password: form.password.value,
    });

    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Login to access your secure dashboard</p>

        <form onSubmit={submit}>
          <input
            className="auth-input"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            className="auth-input"
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <button className="auth-button btn-primary">Login</button>
        </form>

        <a href="/signup" className="auth-link">
          Don’t have an account? Sign up
        </a>
      </div>
    </div>
  );
}
