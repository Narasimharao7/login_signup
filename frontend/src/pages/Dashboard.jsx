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
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
