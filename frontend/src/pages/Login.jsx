import api from "../api";

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
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  );
}
