
'use client'
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Make sure it's installed using `npm install jwt-decode`
import Link from "next/link";
import { FaUsers, FaTasks, FaCog, FaHome, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Cookie from 'js-cookie';

export default function UsersList() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  // Function to fetch the JWT token from cookies XD ESE NHI NIKALTE TOKEN
  // useEffect(() => {
  // const getTokenFromCookies = async () => {
  //     const token = Cookie.get('jwt')
  //     console.log(token)
  //     return `${token}`;
  //   };
  //   // Function to decode the JWT token and extract user details
  //   const getUserFromToken = (token) => {
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       console.log(decodedToken, "decoded token getUserFromToken ")
  //       return decodedToken;
  //     } catch (error) {
  //       console.error("Error decoding token:", error);
  //     }
  //   };

  //   // Fetching user details
  //   const fetchUserDetails = async () => {
  //     try {
  //       const token = getTokenFromCookies();
  //       if (token) {
  //         const userId = getUserFromToken(token);
  //         const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/auth/userDetails", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setUser(response.data);
  //       } else {
  //         // router.push('/user/login');
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user details:", error);
  //     }
  //   };

  //   // Fetching restaurant data
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/restaurant/restaurantList");
  //       setRestaurants(response.data);
  //     } catch (error) {
  //       console.error("Error fetching restaurants:", error);
  //     }
  //   };

  //   fetchUserDetails();
  //   fetchRestaurants();
  // }, []);
  // useEffect(() => {
  //   const getTokenFromCookies = () => {
  //     const token = Cookie.get("jwt");
  //     console.log("Token from cookies:", token);
  //     return `${token}`; // Ensures the token is returned as a string
  //   };
  
  //   // Function to decode the JWT token and extract user details
  //   const getUserFromToken = (token) => {
  //     try {
  //       console.log("Attempting to decode token:", token);
  //       const decodedToken = jwtDecode(token);
  //       console.log("Decoded token:", decodedToken);
  //       return decodedToken;
  //     } catch (error) {
  //       console.error("Error decoding token:", error.message);
  //     }
  //   };
  
  //   // Fetching user details
  //   const fetchUserDetails = async () => {
  //     try {
  //       console.log("Fetching token for user details...");
  //       const token = getTokenFromCookies();
  //       console.log("Token fetched:", token);
  
  //       if (token) {
  //         console.log("Decoding token to get user ID...");
  //         const userId = getUserFromToken(token);
  //         console.log("User ID from token:", userId);
  
  //         console.log("Fetching user details from API...");
  //         const response = await axios.get(
  //           "https://foodapp-backend-production-7ffe.up.railway.app/auth/userDetails",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         console.log("User details fetched successfully:", response.data);
  //         setUser(response.data);
  //       } else {
  //         console.warn("No token found. Redirecting to login page...");
  //         // router.push('/user/login'); Uncomment when implementing redirect
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user details:", error.message);
  //     }
  //   };
  
  //   // Fetching restaurant data
  //   const fetchRestaurants = async () => {
  //     try {
  //       console.log("Fetching restaurant list from API...");
  //       const response = await axios.get(
  //         "https://foodapp-backend-production-7ffe.up.railway.app/restaurant/restaurantList"
  //       );
  //       console.log("Restaurants fetched successfully:", response.data);
  //       setRestaurants(response.data);
  //     } catch (error) {
  //       console.error("Error fetching restaurants:", error.message);
  //     }
  //   };
  
  //   console.log("Starting fetch operations...");
  //   fetchUserDetails();
  //   fetchRestaurants();
  // }, []);
  useEffect(() => {
    // Function to get token from cookies
    const getTokenFromCookies = () => {
      const token = Cookie.get("jwt");
      console.log("Token from cookies:", token);
      return token || null; // Return null if no token is found
    };

    // Function to decode the JWT token and extract user details
    const getUserFromToken = (token) => {
      try {
        console.log("Attempting to decode token:", token);
        const decodedToken = jwtDecode(token);
        console.log("Decoded token:", decodedToken);
        return decodedToken;
      } catch (error) {
        console.error("Error decoding token:", error.message);
        return null;
      }
    };

    // Fetching user details
    const fetchUserDetails = async () => {
      try {
        console.log("Fetching token for user details...");
        const token = getTokenFromCookies();
        console.log("Token fetched:", token);

        if (token) {
          console.log("Decoding token to get user ID...");
          const userId = getUserFromToken(token);
          console.log("User ID from token:", userId);

          console.log("Fetching user details from API...");
          const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/auth/userDetails", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log("User details fetched successfully:", response.data);
          setUser(response.data);
        } else {
          console.warn("No token found. Redirecting to login page...");
          router.push('/login'); // Redirect to login page if no token is found
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    // Fetching restaurant data
    const fetchRestaurants = async () => {
      try {
        console.log("Fetching restaurant list from API...");
        const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/restaurant/restaurantList");
        console.log("Restaurants fetched successfully:", response.data);
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
        setError("Failed to fetch restaurants");
      }
    };

    // Check if the token exists and proceed with fetching data
    const checkToken = getTokenFromCookies();
    if (checkToken) {
      console.log("Token found, proceeding with fetch operations...");
      fetchUserDetails();
      fetchRestaurants();
    } else {
      console.log("No token found, redirecting to login...");
      router.push('/user/login'); // Redirect if no token is found
    }
  }, [router]); // 
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
