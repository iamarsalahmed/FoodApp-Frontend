
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
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [profileImage, setProfileImage] = useState(null); // Profile image state

  const router = useRouter();

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    console.log("Updated address:", { [name]: value }); // Log address change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with the following data:", { name, email, password, phone, address, profileImage });

    try {
      var profileImageUrl = (null)

      // Upload profile image to Cloudinary
      if (profileImage) {
        const formData = new FormData();
        formData.append("file", profileImage);
        formData.append("upload_preset", "Foodpanda");

        console.log("Uploading profile image to Cloudinary...");
        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/dhe8oxf2v/image/upload`,
          formData
        );
        console.log("Cloudinary upload response:", uploadRes.data);
        console.log("Cloudinary upload response secure url:", uploadRes.data.secure_url);
        
        profileImageUrl = uploadRes.data.secure_url;
        var pImgUrl = profileImageUrl.toString()
        console.log(pImgUrl, "pImgUrl")
        console.log(profileImageUrl,"profileImageUrl" )
      } else {
        console.log("No profile image uploaded.");
      }

      // Submit signup data to backend
      console.log("Submitting signup data to backend...");
      const res = await axios.post("https://foodapp-backend-production-7ffe.up.railway.app/auth/signup", {
        name,
        email,
        password,
        phone,
        address,
        profileImage: pImgUrl, // Send the image URL
        
      });
      console.log(profileImageUrl,"profileImageUrl res wali" )
      console.log("Signup response:", res.data);

      Swal.fire({
        title: "Success!",
        text: res.data.message || "Signup successful!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.push("/user/login");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 relative text-white">
      {/* Navbar Section */}
      <nav className="bg-teal-600 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Foodie<span className="text-teal-200">App</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/features" className="text-white hover:text-teal-200 transition duration-300">
              Features
            </Link>
            <Link href="#about" className="text-white hover:text-teal-200 transition duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-teal-200 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      ></div>
      <div className="relative bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Input Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
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
            {/* Other Input Fields */}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
               <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={address.street}
                onChange={handleAddressChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleAddressChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleAddressChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleAddressChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            {/* More Input Fields */}
          </div>
          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files[0])}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
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
          <Link href="/user/login" className="text-teal-600 hover:underline font-semibold">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
  
  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 relative text-white">
  //     {/* Navbar Section */}
  //     <nav className="bg-teal-600 fixed top-0 left-0 w-full z-10 shadow-md">
  //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  //         <Link href="/" className="text-white text-2xl font-semibold">
  //           Foodie<span className="text-teal-200">App</span>
  //         </Link>
  //         <div className="hidden md:flex gap-6">
  //           <Link href="/features" className="text-white hover:text-teal-200 transition duration-300">Features</Link>
  //           <Link href="#about" className="text-white hover:text-teal-200 transition duration-300">About Us</Link>
  //           <Link href="/contact" className="text-white hover:text-teal-200 transition duration-300">Contact</Link>
  //         </div>
  //       </div>
  //     </nav>
  //     {/* Background Image */}
  //     <div
  //       className="absolute inset-0 bg-cover bg-center opacity-30"
  //       style={{
  //         backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  //       }}
  //     ></div>
  //     <div className="relative bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
  //       <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Create an Account</h2>
  //       <form onSubmit={handleSubmit} className="space-y-6">
  //         <div className="grid grid-cols-2 gap-6">
  //           {/* Left Column */}
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
  //             <input
  //               type="text"
  //               placeholder="Enter your name"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               required
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
  //             <input
  //               type="email"
  //               placeholder="Enter your email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               required
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
  //             <input
  //               type="password"
  //               placeholder="Enter your password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               required
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
  //             <input
  //               type="number"
  //               placeholder="Enter your phone number"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               required
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
  //             <input
  //               type="text"
  //               name="street"
  //               placeholder="Street Address"
  //               value={address.street}
  //               onChange={handleAddressChange}
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
  //             <input
  //               type="text"
  //               name="city"
  //               placeholder="City"
  //               value={address.city}
  //               onChange={handleAddressChange}
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
  //             <input
  //               type="text"
  //               name="state"
  //               placeholder="State"
  //               value={address.state}
  //               onChange={handleAddressChange}
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
  //             <input
  //               type="text"
  //               name="postalCode"
  //               placeholder="Postal Code"
  //               value={address.postalCode}
  //               onChange={handleAddressChange}
  //               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //             />
  //           </div>
  //         </div>
  //         {/* Profile Image Input */}
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
  //           <input
  //             type="file"
  //             accept="image/*"
  //             onChange={(e) => setProfileImage(e.target.files[0])}
  //             className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
  //         >
  //           Sign Up
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );
  
  
}
