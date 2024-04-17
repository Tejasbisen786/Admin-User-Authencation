// Signup.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast.success("Signup successful");
        navigate("/login");

        // Redirect to login page or show a success message
      } else {
        toast.error("Signup failed");
      }
    } catch (error) {
      console.error("Server error:", error);
      toast.error("Server error");
    }
  };

  return (
    <>
      <div className="className=text-2xl  bg-black  mt-10 p-6  uppercase tracking-widest   text-indigo-900 text-center font-semibold font-mono   shadow-md shadow-indigo-800  flex flex-col gap-9">
        <div className="flex flex-col gap-6 w-1/2 mx-auto">
          <h2>Signup</h2>
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
            onClick={handleSignup}
            className="bg-indigo-900 text-white py-1"
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
