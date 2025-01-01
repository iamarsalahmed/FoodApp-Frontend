
'use client';
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 

  const router = useRouter();

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    console.log("Updated address:", { [name]: value }); // Log address change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with the following data:", { name, email, password, phone });

    try {
     

      // Submit signup data to backend
      console.log("Submitting signup data to backend...");
      const res = await axios.post("http://localhost:3001/admin/owner/signup", {
        name,
        email,
        password,
        phone
        
      });

      Swal.fire({
        title: "Success!",
        text: res.data.message || "Signup successful!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.push("/admin/login");
      }, 1500);
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Signup failed. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 text-white">
  //     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
  //       <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h2>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //         <div>
  //           <input
  //             type="text"
  //             placeholder="Restaurant Name"
  //             value={name}
  //             onChange={(e) => {
  //               setName(e.target.value);
  //               console.log("Name updated:", e.target.value); // Log name change
  //             }}
  //             required
  //             className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="email"
  //             placeholder="Email"
  //             value={email}
  //             onChange={(e) => {
  //               setEmail(e.target.value);
  //               console.log("Email updated:", e.target.value); // Log email change
  //             }}
  //             required
  //             className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="password"
  //             placeholder="Password"
  //             value={password}
  //             onChange={(e) => {
  //               setPassword(e.target.value);
  //               console.log("Password updated:", e.target.value); // Log password change
  //             }}
  //             required
  //             className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="number"
  //             placeholder="Phone Number"
  //             value={phone}
  //             onChange={(e) => {
  //               setPhone(e.target.value);
  //               console.log("Phone updated:", e.target.value); // Log phone change
  //             }}
  //             required
  //             className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //           />
  //         </div>
         
   
         


  //         <button
  //           type="submit"
  //           className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
  //         >
  //           Sign Up
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZvb2R8ZW58MHwwfDB8fHww")',
        }}
      ></div>
  
      {/* Form Section */}
      <div className="relative bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Input Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
              <input
                type="text"
                placeholder="Enter your restaurant name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
  
        {/* Redirect to Login */}
        <p className="text-gray-700 text-center mt-6">
          Already have an account?{' '}
          <Link href="/admin/login" className="text-teal-600 hover:underline font-semibold">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
  
  
}
