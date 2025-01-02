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
        "https://foodapp-backend-production-7ffe.up.railway.app/auth/login",
        // "http://localhost:3001/auth/login",
        { email, password },
        { withCredentials: true } // Enable sending cookies

      );
      // Assuming the response contains a token
      // const { token } = res.data;

      // // Set the token as a cookie
      // Cookies.set('jwt', token, {
      //   expires: 7, // The cookie will expire in 7 days
      //   secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      //   sameSite: 'Strict', // Adjust `SameSite` as needed
      // });
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting to dashboard...",
        timer: 1500,
        showConfirmButton: false,
      });
      console.log("push to dahsboard")
      // Redirect to dashboard after delay
      router.push("/user/dashboard");
      // setTimeout(() => {
      // }, 1500);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-600 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      ></div>
      <div className="relative bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Welcome Back!</h2>
        <p className="text-gray-600 text-center mb-6">Login to access your account</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2 rounded focus:ring-teal-600" />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-sm text-teal-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-6">
          Don't have an account?{' '}
          <a href="/user/signup" className="text-teal-600 hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );

}
