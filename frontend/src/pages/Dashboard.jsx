import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    api
      .get("/auth/dashboard")
      .then((res) => setData(res.data.message))
      .catch(() => {
        localStorage.clear();
        window.location.href = "/login";
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-text">Welcome to your account</p>
        <button className="auth-button logout-btn">Logout</button>
      </div>
    </div>
  );
}
