// 'use client';
// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2"; // Import SweetAlert2
// import { useRouter } from "next/navigation";

// export default function SignupForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState({
//     street: "",
//     city: "",
//     state: "",
//     postalCode: "",
//   });

//   const router = useRouter();

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await axios.post("http://localhost:3001/auth/signup", {
//   //       name,
//   //       email,
//   //       password,
//   //       phone,
//   //       address,
//   //     });

//   //     // Show success alert
//   //     Swal.fire({
//   //       title: "Success!",
//   //       text: res.message || "Signup successful!",
//   //       icon: "success",
//   //       confirmButtonText: "OK",
//   //       timer: 3000,
//   //       timerProgressBar: true,
//   //     });
//   //     setTimeout(() => {
//   //       router.push("/login");
//   //     }, 1500);
//   //   } catch (error) {
//   //     // Show error alert
//   //     Swal.fire({
//   //       title: "Error!",
//   //       text: error.response?.data?.message || "Signup failed. Please try again.",
//   //       icon: "error",
//   //       confirmButtonText: "Retry",
//   //     });
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3001/auth/signup", {
//         name,
//         email,
//         password,
//         phone,
//       });

//       Swal.fire({
//         title: "Success!",
//         text: res.data.message || "Signup successful!",
//         icon: "success",
//         confirmButtonText: "OK",
//         timer: 3000,
//         timerProgressBar: true,
//       });

//       setTimeout(() => {
//         router.push("/user/login");
//       }, 1500);
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.response?.data?.message || "Signup failed. Please try again.",
//         icon: "error",
//         confirmButtonText: "Retry",
//       });
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 text-white">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="street"
//               placeholder="Street Address"
//               value={address.street}
//               onChange={handleAddressChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={address.city}
//               onChange={handleAddressChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={address.state}
//               onChange={handleAddressChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="postalCode"
//               placeholder="Postal Code"
//               value={address.postalCode}
//               onChange={handleAddressChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// pages/restaurant-owner/signup.jsx
'use client'
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Signup() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3001/admin/owner/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         router.push("/admin/login");
//       } else {
//         const { message } = await res.json();
//         console.log(message, "message")
//         alert(message || "Signup failed!");
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         className="w-full max-w-md p-8 bg-white rounded shadow-lg"
//         onSubmit={handleSignup}
//       >
//         <h2 className="mb-6 text-2xl font-bold text-center">Restaurant Owner Signup</h2>
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-700" htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
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
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-700" htmlFor="phone">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
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
//           Signup
//         </button>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <a href="/restaurant-owner/login" className="text-blue-500 hover:underline">
//             Login here
//           </a>.
//         </p>
//       </form>
//     </div>
//   );
// }
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Signup() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3001/admin/owner/signup", formData);

//       if (res.status === 200) {
//         router.push("/admin/login");
//       } else {
//         console.log(res.data.message || "Signup failed!");
//         alert(res.data.message || "Signup failed!");
//       }
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         console.log(error.response.data.message, "message");
//         alert(error.response.data.message || "Signup failed!");
//       } else if (error.request) {
//         // No response was received
//         console.log("No response received from server.");
//         alert("No response received from server.");
//       } else {
//         // Something else happened
//         console.log("Error:", error.message);
//         alert("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         className="w-full max-w-md p-8 bg-white rounded shadow-lg"
//         onSubmit={handleSignup}
//       >
//         <h2 className="mb-6 text-2xl font-bold text-center">Restaurant Owner Signup</h2>
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-700" htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>
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
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-700" htmlFor="phone">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
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
//           Signup
//         </button>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <a href="/admin/login" className="text-blue-500 hover:underline">
//             Login here
//           </a>.
//         </p>
//       </form>
//     </div>
//   );
// }
'use client';
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useRouter } from "next/navigation";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("Name updated:", e.target.value); // Log name change
              }}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email updated:", e.target.value); // Log email change
              }}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("Password updated:", e.target.value); // Log password change
              }}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                console.log("Phone updated:", e.target.value); // Log phone change
              }}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
         
   
         


          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
