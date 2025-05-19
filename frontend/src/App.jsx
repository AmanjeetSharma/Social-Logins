import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Demo from "./components/Demo";
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then(res => {
      setUser(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/demo"
          element={user ? <Demo /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
