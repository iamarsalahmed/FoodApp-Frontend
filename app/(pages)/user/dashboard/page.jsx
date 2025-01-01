'use client';

// import React from 'react';

// const UserDashboard = () => {

//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1234567890',
//   };

//   const orders = [
//     { id: 1, restaurant: 'Pizza Hut', total: '$25.00', status: 'Delivered' },
//     { id: 2, restaurant: 'Burger King', total: '$15.00', status: 'On the Way' },
//     { id: 3, restaurant: 'Sushi Place', total: '$45.00', status: 'Processing' },
//   ];

//   const favoriteRestaurants = [
//     { id: 1, name: 'Pizza Hut', cuisine: 'Italian' },
//     { id: 2, name: 'Sushi Place', cuisine: 'Japanese' },
//     { id: 3, name: 'Burger King', cuisine: 'American' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-400 to-indigo-600 text-white">
//       <div className="container mx-auto px-6 py-8">
//         {/* User Information */}
//         <section className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">Welcome, {user.name}!</h1>
//           <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
//             <p className="text-lg font-semibold">Name: {user.name}</p>
//             <p className="text-lg">Email: {user.email}</p>
//             <p className="text-lg">Phone: {user.phone}</p>
//           </div>
//         </section>

//         {/* Order History */}
//         <section className="mb-8">
//           <h2 className="text-3xl font-semibold mb-4">Order History</h2>
//           <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
//             {orders.length ? (
//               <ul>
//                 {orders.map((order) => (
//                   <li key={order.id} className="mb-4">
//                     <p className="font-semibold">Restaurant: {order.restaurant}</p>
//                     <p>Total: {order.total}</p>
//                     <p>Status: {order.status}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders yet!</p>
//             )}
//           </div>
//         </section>

//         {/* Favorite Restaurants */}
//         <section className="mb-8">
//           <h2 className="text-3xl font-semibold mb-4">Favorite Restaurants</h2>
//           <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
//             {favoriteRestaurants.length ? (
//               <ul>
//                 {favoriteRestaurants.map((restaurant) => (
//                   <li key={restaurant.id} className="mb-4">
//                     <p className="font-semibold">{restaurant.name}</p>
//                     <p>Cuisine: {restaurant.cuisine}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No favorite restaurants added yet!</p>
//             )}
//           </div>
//         </section>

//         {/* Account Settings */}
//         <section>
//           <h2 className="text-3xl font-semibold mb-4">Account Settings</h2>
//           <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
//             <button className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-700 transition">
//               Edit Account
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode"; // Install this with `npm install jwt-decode`

// export default function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     // Function to fetch the JWT token from cookies
//     const getTokenFromCookies = () => {
//       console.log("Fetching token from cookies..."); // Debugging log
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("jwt"))
//         ?.split("=")[1];
//       console.log("JWT Token:", token); // Log the token (if found)
//       return token;
//     };

//     // Function to decode the JWT token and extract user details
//     const getUserFromToken = (token) => {
//       console.log("Decoding token:", token); // Log the token before decoding
//       try {
//         const decodedToken = jwtDecode(token);
//         console.log("Decoded Token:", decodedToken); // Log the decoded token
//         return {
//           email: decodedToken.email, // Assuming the token contains email
//           id: decodedToken.id, // Assuming the token contains user ID
//         };
//       } catch (error) {
//         console.error("Error decoding token:", error); // Error handling log
//       }
//     };

//     // Fetching data from the API
//     const fetchUsers = async () => {
//       console.log("Starting fetchUsers function..."); // Debugging log
//       try {
//         const token = getTokenFromCookies();
//         if (token) {
//           console.log("Token found. Proceeding with user decoding..."); // Debugging log
//           const user = getUserFromToken(token);
//           setUserDetails(user); // Store user details (email, id)
//           console.log("User Details:", user); // Log the user info

//           // Fetching users data from the API
//           console.log("Sending API request to fetch users..."); // Debugging log
//           const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/auth/users", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           console.log("API Response:", response); // Log the full response
//           console.log("Fetched Users:", response.data); // Log the users' data
//           setUsers(response.data); // Set users state
//         } else {
//           console.log("No token found in cookies."); // Log when no token is found
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error); // Error handling log
//       }
//     };

//     fetchUsers();
//   }, []); // Empty dependency array to run once when the component mounts

//   return (
//     <div>
//       <h1>User List</h1>
//       {userDetails && (
//         <div>
//           <p>User Email: {userDetails.email}</p>
//           <p>User ID: {userDetails.id}</p>
//         </div>
//       )}
//       <ul>
//         {users.length > 0 ? (
//           users.map((user) => (
//             <li key={user._id}>
//               {user.name} - {user.email} - {user.role}
//             </li>
//           ))
//         ) : (
//           <p>No users available</p> // If no users are fetched, show this message
//         )}
//       </ul>
//     </div>
//   );
// }
// import { useRouter } from "next/navigation"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode"; // Make sure it's installed using `npm install jwt-decode`
// import Link from 'next/link'
// import { FaUsers, FaTasks, FaCog, FaHome,FaEdit,FaTrashAl,FaCheckCircle,FaSignOutAlt } from "react-icons/fa"
// import Swal from 'sweetalert2';




// export default function UsersList() {
//   const router = useRouter()
//   const [userDetails, setUserDetails] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Function to fetch the JWT token from cookies
//     const getTokenFromCookies = () => {
//       console.log("Fetching token from cookies..."); // Debugging log
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("jwt"))
//         ?.split("=")[1];
//       console.log("JWT Token:", token); // Log the token (if found)
//       return token;
//     };

//     // Function to decode the JWT token and extract user details
//     const getUserFromToken = (token) => {
//       console.log("Decoding token:", token); // Log the token before decoding
//       try {
//         const decodedToken = jwtDecode(token);
//         console.log("Decoded Token:", decodedToken); // Log the decoded token
//         return decodedToken; // Assuming the token contains user ID
//       } catch (error) {
//         console.error("Error decoding token:", error); // Error handling log
//       }
//     };

//     // Fetching data from the API
//     const fetchUserDetails = async () => {
//       console.log("Starting fetchUserDetails function..."); // Debugging log
//       try {
//         const token = getTokenFromCookies();
//         if (token) {
//           console.log("Token found. Proceeding with user decoding..."); // Debugging log
//           const userId = getUserFromToken(token);
//           console.log("Decoded User ID:", userId); // Log userId

//           // Fetching user data from the API
//           const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/auth/userDetails", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           console.log("API Response:", response); // Log the full response
//           setUser(response.data); // Store the user details in the state
//         } else {
//           console.log("No token found in cookies."); // Log when no token is found
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error); // Error handling log
//       }
//     };

//     fetchUserDetails();
//   }, []); // Empty dependency array to run once when the component mounts
//   const handleLogout = async () => {
//     try {
//       Swal.fire({
//         title: 'Logging out...',
//         text: 'Please wait a moment.',
//         icon: 'info',
//         allowOutsideClick: false,
//         showConfirmButton: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       const response = await axios.post('https://foodapp-backend-production-7ffe.up.railway.app/auth/user/logout', {}, { withCredentials: true });
//       console.log('Logout response:', response);

//       if (response.status === 200) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'You have been logged out successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         }).then(() => {
//           setTimeout(() => {
//             router.push("/user/login");
//           }, 1500);
//         });
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: 'Logout failed. Please try again.',
//           icon: 'error',
//           confirmButtonText: 'OK',
//         });
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//       Swal.fire({
//         title: 'Error',
//         text: `Something went wrong: ${error.response?.data?.message || error.message}`,
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen">
//         <div>
//           {/* Profile Section in Sidebar */}
//           {user && (
//             <div className="p-4 flex flex-col items-center">
//               <img
//                 className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
//                 src={user.profileImage}
//                 alt="User Profile"
//               />
//               <h2 className="mt-4 text-lg font-semibold text-gray-800">{user.name}</h2>
//               <p className="text-sm text-gray-600">{user.email}</p>
//             </div>
//           )}
//           {/* Navigation Links */}

//           <nav className="mt-6">
//             <ul>
//               <Link href="/dashboard">
//                 <li className="p-4 hover:bg-gray-200 flex items-center">
//                   <FaHome className="mr-3 text-indigo-600" />
//                   Dashboard
//                 </li>
//               </Link>
//               <Link href="/dashboard/teams">
//                 <li className="p-4 hover:bg-gray-200 flex items-center">
//                   <FaUsers className="mr-3 text-indigo-600" />
//                   Teams
//                 </li>
//               </Link>
//               <li className="p-4 hover:bg-gray-200 flex items-center">
//                 <FaTasks className="mr-3 text-green-600" />
//                 Tasks
//               </li>
//               <li className="p-4 hover:bg-gray-200 flex items-center">
//                 <FaCog className="mr-3 text-gray-600" />
//                 Settings
//               </li>
//             </ul>
//           </nav>
//         </div>
//         {/* Logout Button */}
//         <div className="p-4">
//           <button
//             onClick={handleLogout}
//             className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center"
//           >
//             <FaSignOutAlt className="mr-2" />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}

//     </div>
//   );

//   // return (
//   //   <div>
//   //           {/* Sidebar */}
//   //     <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
//   //       <div>
//   //         <div className="p-4">
//   //           <h2 className="text-2xl font-bold text-gray-800">Team Manager</h2>
//   //         </div>
//   //         <nav className="mt-6">
//   //           <ul>
//   //             <Link href="/dashboard">
//   //               <li className="p-4 hover:bg-gray-200 flex items-center">
//   //                 <FaHome className="mr-3 text-indigo-600" />
//   //                 Dashboard
//   //               </li>
//   //             </Link>
//   //             <Link href='/dashboard/teams'>
//   //               <li className="p-4 hover:bg-gray-200 flex items-center">
//   //                 <FaUsers className="mr-3 text-indigo-600" />
//   //                 Teams
//   //               </li>
//   //             </Link>
//   //             <li className="p-4 hover:bg-gray-200 flex items-center">
//   //               <FaTasks className="mr-3 text-green-600" />
//   //               Tasks
//   //             </li>
//   //             <li className="p-4 hover:bg-gray-200 flex items-center">
//   //               <FaCog className="mr-3 text-gray-600" />
//   //               Settings
//   //             </li>
//   //           </ul>
//   //         </nav>
//   //       </div>
//   //       {/* Logout Button */}
//   //       <div className="p-4">
//   //         <button
//   //           onClick={handleLogout}
//   //           className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center"
//   //         >
//   //           <FaSignOutAlt className="mr-2" />
//   //           Logout
//   //         </button>
//   //       </div>
//   //     </aside>

//   //     {user ? (
//   //     <div className="min-h-screen bg-gray-100">
//   //     <div className="flex items-center justify-center py-10">
//   //       <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//   //         {/* Profile Section */}
//   //         {user && (
//   //           <div className="flex flex-col items-center">
//   //             <img
//   //               className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
//   //               src={user.profileImage}
//   //               alt="User Profile"
//   //             />
//   //             <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
//   //             <p className="text-sm text-gray-600">{user.email}</p>
//   //             <p className="text-sm text-gray-600">{user.phone}</p>

//   //             <div className="mt-6 w-full">
//   //               <div className="grid grid-cols-2 gap-4 text-gray-800">
//   //                 <div className="flex flex-col items-center">
//   //                   <span className="text-lg font-medium">Joined</span>
//   //                   <p className="text-sm text-gray-600">
//   //                     {new Date(user.createdAt).toLocaleDateString()}
//   //                   </p>
//   //                 </div>
//   //                 <div className="flex flex-col items-center">
//   //                   <span className="text-lg font-medium">User ID</span>
//   //                   <p className="text-sm text-gray-600">{user._id}</p>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         )}
//   //       </div>
//   //     </div>
//   //   </div>
//   //     ) : (
//   //       <p>Loading user details...</p>
//   //     )}
//   //   </div>
//   // );
// }
'use client'
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Make sure it's installed using `npm install jwt-decode`
import Link from "next/link";
import { FaUsers, FaTasks, FaCog, FaHome, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function UsersList() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Function to fetch the JWT token from cookies
    const getTokenFromCookies = () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt"))
        ?.split("=")[1];
      return token;
    };

    // Function to decode the JWT token and extract user details
    const getUserFromToken = (token) => {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        return decodedToken;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    // Fetching user details
    const fetchUserDetails = async () => {
      try {
        const token = getTokenFromCookies();
        if (token) {
          const userId = getUserFromToken(token);
          const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/auth/userDetails", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Fetching restaurant data
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/restaurant/restaurantList");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchUserDetails();
    fetchRestaurants();
  }, []);

  const handleLogout = async () => {
    try {
      Swal.fire({
        title: "Logging out...",
        text: "Please wait a moment.",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      const response = await axios.post("https://foodapp-backend-production-7ffe.up.railway.app/auth/user/logout", {}, { withCredentials: true });

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setTimeout(() => {
            router.push("/user/login");
          }, 1500);
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Something went wrong: ${error.response?.data?.message || error.message}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen">
        <div>
          {user && (
            <div className="p-4 flex flex-col items-center">
              <img
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
                src={user.profileImage}
                alt="User Profile"
              />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          )}
          <nav className="mt-6">
            <ul>
              <Link href="/dashboard">
                <li className="p-4 hover:bg-gray-200 flex items-center">
                  <FaHome className="mr-3 text-indigo-600" />
                  Dashboard
                </li>
              </Link>
              
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">

              {/* Profile Image Section */}
              <div className="mb-4">
                <img
                  src={restaurant.profileImage || "https://via.placeholder.com/150"}
                  alt={restaurant.name}
                  className="rounded-t-lg h-48 w-full object-cover"
                />
              </div>

              {/* Restaurant Info Section */}
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800">{restaurant.name}</h5>
                <p className="text-sm text-gray-600">Cuisine: {restaurant.cuisine}</p>
                <p className="text-sm text-gray-600">Rating: {restaurant.rate} ★</p>
              </div>

              {/* View Details Button */}
              <div className="mt-4">
                <button
                  onClick={() => router.push(`/user/dashboard/${restaurant._id}`)} // Redirect to dynamic restaurant page
                  className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
