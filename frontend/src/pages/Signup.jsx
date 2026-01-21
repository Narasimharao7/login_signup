import api from "../api";

export default function Signup() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;

    await api.post("/auth/signup", {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    });

    alert("Signup successful");
    window.location.href = "/login";
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Signup</button>
    </form>
  );
}
