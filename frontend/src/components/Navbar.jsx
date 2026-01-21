import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>AuthApp</h2>
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
