import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  isAuthenticated,
  isAdmin,
  parseJwt,
  currentAdmin,
} from "../utils/auth"; // Import parseJwt from auth.js

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const checkAdmin = isAdmin();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Store the token in browser local storage
        localStorage.setItem("token", data.token);
        const token = data.token;

        setIsLoggedIn(true);
        setIsAdmin(currentAdmin(token));

        const checkCurrentAdmin = currentAdmin(token);
        if (checkCurrentAdmin === true) {
          navigate("/admin-dashboard");
        }
        else{
          navigate("/user-dashboard");
        }
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Server error:", error);
      toast.error("Server error");
    }
  };

  return (
    <>
      <div className="className=text-2xl  bg-gray-200 p-6 text-center font-semibold font-mono text-indigo-800 tracking-wide shadow-md shadow-indigo-800  flex flex-col gap-9">
        <div className="flex flex-col gap-6 w-1/2 mx-auto">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-indigo-900 text-white py-1"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
