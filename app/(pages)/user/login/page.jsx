'use client'
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // For programmatic navigation
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Next.js router for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/auth/login",
        { email, password },
        { withCredentials: true } // Enable sending cookies
      );

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting to dashboard...",
        timer: 1500,
        showConfirmButton: false,
      });

      // Redirect to dashboard after delay
      setTimeout(() => {
        router.push("/user/dashboard");
      }, 1500);
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid credentials",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
