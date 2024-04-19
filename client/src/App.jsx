import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { currentAdmin, isAuthenticated } from "./utils/auth";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setIsAdmin(currentAdmin(token));
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={isLoggedIn ? <Navigate to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} replace /> : <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to={isAdmin ? "/admin-dashboard" : "/user-dashboard"} replace /> : <Register />} />
          <Route path="/user-dashboard" element={isLoggedIn ? <UserDashboard /> : <Navigate to="/" replace />} />
          <Route path="/admin-dashboard" element={isLoggedIn && isAdmin ? <AdminDashboard /> : <Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
