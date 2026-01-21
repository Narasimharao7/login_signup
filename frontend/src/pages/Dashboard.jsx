import { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get("/api/user/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => setMsg(res.data.message))
      .catch(() => setMsg("Unauthorized"));
  }, []);

  return (
    <div className="dashboard">
      <h1>{msg}</h1>
      <p>You are logged in successfully 🎉</p>
    </div>
  );
};

export default Dashboard;
