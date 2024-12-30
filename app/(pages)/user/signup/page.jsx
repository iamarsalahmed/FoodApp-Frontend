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
//   const [profileImage, setProfileImage] = useState(null); // Profile image state

//   const router = useRouter();

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let profileImageUrl = null;

//       // Upload profile image to Cloudinary
//       if (profileImage) {
//         const formData = new FormData();
//         formData.append("file", profileImage);
//         formData.append("upload_preset", "<YOUR_UPLOAD_PRESET>");

//         const uploadRes = await axios.post(
//           `https://api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>/image/upload`,
//           formData
//         );

//         profileImageUrl = uploadRes.data.secure_url;
//       }

//       // Submit signup data to backend
//       const res = await axios.post("http://localhost:3001/auth/signup", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         profileImage: profileImageUrl, // Send the image URL
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
//           {/* Other form inputs */}
//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setProfileImage(e.target.files[0])}
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
//   const [profileImage, setProfileImage] = useState(null); // Profile image state

//   const router = useRouter();

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let profileImageUrl = null;

//       // Upload profile image to Cloudinary
//       if (profileImage) {
//         const formData = new FormData();
//         formData.append("file", profileImage);
//         formData.append("upload_preset", "Foodpanda");

//         const uploadRes = await axios.post(
//           `https://api.cloudinary.com/v1_1/dhe8oxf2v/image/upload`,
//           formData
//         );

//         profileImageUrl = uploadRes.data.secure_url;
//       }

//       // Submit signup data to backend
//       const res = await axios.post("http://localhost:3001/auth/signup", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         profileImage: profileImageUrl, // Send the image URL
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
//         <div>
//                      <input
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
//           {/* Other form inputs */}
//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setProfileImage(e.target.files[0])}
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
      const res = await axios.post("http://localhost:3001/auth/signup", {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
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
          <div>
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={address.postalCode}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Profile Image Input */}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setProfileImage(e.target.files[0]);
                console.log("Profile image selected:", e.target.files[0]); // Log profile image change
              }}
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
