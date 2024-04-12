import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { isAdmin, isAuthenticated } from "./utils/auth";

const App = () => {
  const checkAdmin = isAdmin();
  const checkAuth = isAuthenticated() && checkAdmin;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          {!checkAdmin ? <Route path="/user-dashboard" element={<UserDashboard />} /> : <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />}
          {checkAuth ? <Route path="/admin-dashboard" element={<AdminDashboard />} /> : <Route path="*" element={<Navigate to="/user-dashboard" replace />} />}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};


export default App;
