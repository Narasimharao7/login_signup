import api from "../api";
import "../App.css";

export default function Signup() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    await api.post("/auth/signup", {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    });

    window.location.href = "/login";
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">
          Join us and manage your dashboard securely
        </p>

        <form onSubmit={submit}>
          <input
            className="auth-input"
            name="name"
            placeholder="Full Name"
            required
          />

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

          <button className="auth-button btn-secondary">Create Account</button>
        </form>

        <a href="/login" className="auth-link">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
}
