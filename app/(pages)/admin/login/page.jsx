// 'use client'
// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation"; // For programmatic navigation
// import Swal from "sweetalert2";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter(); // Next.js router for redirection

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:3001/auth/login",
//         { email, password },
//         { withCredentials: true } // Enable sending cookies
//       );

//       // Show success alert
//       Swal.fire({
//         icon: "success",
//         title: "Login Successful",
//         text: "Redirecting to dashboard...",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       // Redirect to dashboard after delay
//       setTimeout(() => {
//         router.push("/user/dashboard");
//       }, 1500);
//     } catch (error) {
//       // Show error alert
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text: error.response?.data?.message || "Invalid credentials",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// pages/restaurant-owner/login.jsx
// 'use client'
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Login() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3001/admin/owner/login", formData);


//       if (res.status === 200) {
//         router.push("/admin/dashboard"); // Redirect to dashboard after login
//       } else {
//         alert(res.data.message || "Login failed!");
//       }
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         alert(error.response.data.message || "Login failed!");
//       } else if (error.request) {
//         // No response was received
//         alert("No response received from server.");
//       } else {
//         // Something else happened
//         alert("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         className="w-full max-w-md p-8 bg-white rounded shadow-lg"
//         onSubmit={handleLogin}
//       >
//         <h2 className="mb-6 text-2xl font-bold text-center">Restaurant Owner Login</h2>
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <a href="/admin/signup" className="text-blue-500 hover:underline">
//             Signup here
//           </a>.
//         </p>
//       </form>
//     </div>
//   );
// }

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
        "http://localhost:3001/admin/owner/login",
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
        router.push("/admin/dashboard");
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

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  //     <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
  //       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login Restaurant Owner</h2>
  //       <form onSubmit={handleLogin} className="space-y-4">
  //         <div>
  //           <input
  //             type="email"
  //             placeholder="Email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="password"
  //             placeholder="Password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
  //         >
  //           Login
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
            'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      ></div>
      
      <div className="relative bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8 ">Login <br /> Restaurant Owner</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
}
