import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <ProtectedRoute
            path="/user-dashboard"
            element={<UserDashboard />}
            isAdminRoute={false} // This is not an admin route
          />
          <ProtectedRoute
            path="/admin-dashboard"
            element={AdminDashboard} // Pass the component directly
            isAdminRoute={true} // This is an admin route
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
