
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import EditRestaurantModal from './EditRestaurantModal';
import AddRestaurantModal from './AddRestaurantModal';
import { FaHome, FaUsers, FaTasks, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from 'next/link';
import EditMenuModal from './EditMenuModal';  // Import the EditMenuModal component
import { jwtDecode } from "jwt-decode"
import Cookie from 'js-cookie';
1

export default function Dashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editRestaurantId, setEditRestaurantId] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // For menu editing modal
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null)
  const [loadingAdd, setLoadingAdd] = useState(false); // For the "Add Restaurant" button
  const [loadingEdit, setLoadingEdit] = useState(false); // For the "Edit" button
  const [loadingDelete, setLoadingDelete] = useState(false); // For the "Delete" button
  const [loading, setLoading] = useState(false); // Holds the ID of the restaurant currently loading



  const router = useRouter();

  useEffect(() => {
    // Function to get token from cookies
    const getTokenFromCookies = () => {
      const token = Cookie.get("jwt");
      console.log(token, "frontend token from cookies");
      return token || null; // Return null if no token is found
    };

    // Check if a token exists in the cookies
    const checkToken = getTokenFromCookies();
    if (checkToken) {
      // Token exists, proceed with fetching data
      const fetchUserDetails = async () => {
        try {
          console.log("Token being sent to the API:", checkToken);

          const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/admin/ownerDetails", {
            headers: {
              Authorization: `Bearer ${checkToken}`,
            },
          });

          console.log("User details fetched:", response);
          setUser(response.data); // Set user details
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      const fetchRestaurants = async () => {
        try {
          console.log("Token found, sending to backend...");
          
          const response = await axios.get("https://foodapp-backend-production-7ffe.up.railway.app/restaurant", {
            headers: {
              Authorization: `Bearer ${checkToken}`,
            },
          });

          console.log("Restaurants fetched:", response.data);
          
          if (response.data.length === 0) {
            setMessage("No restaurants in database");
          } else {
            setRestaurants(response.data);
          }
        } catch (err) {
          console.error("Failed to fetch restaurants:", err);
          setError("Failed to fetch restaurants");
        }
      };

      // Call the fetch functions
      fetchUserDetails();
      fetchRestaurants();
    } else {
      // No token found, redirect to login page
      console.log("No token found in cookies");
      router.push('/admin/login');
    }
  }, [router]); 
  // useEffect(() => {

  //   const getTokenFromCookies = () => {
  //     const token = Cookie.get("jwt");
  //     console.log(token, "frontend token from cookies")
  //     return `${token}`; // Ensures the token is returned as a string
  //   };
  //   // Fetching user details
  //   const checkToken = getTokenFromCookies();
  //   if (checkToken) {
  //     const fetchUserDetails = async () => {
  //       try {
  //         const token = getTokenFromCookies();
  //         // "https://foodapp-backend-production-7ffe.up.railway.app/admin/ownerDetails",
  //         console.log("Token being sent to the API:", token);

  //         if (token) {

  //           const response = await axios.get(
  //             // "https://foodapp-backend-production-7ffe.up.railway.app/admin/ownerDetails",
  //             "https://foodapp-backend-production-7ffe.up.railway.app/admin/ownerDetails",
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${token}`, // Send the token without decoding
  //               },
  //             });
  //           console.log("Sending token in Authorization header:", `Bearer ${token}`);
  //           console.log("User details fetched:", response); // Debugging log
  //           setUser(response.data);
  //         } else {
  //           router.push('/login')
  //           console.log("No token found in cookies"); // Debugging log
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user details:", error);
  //       }
  //     };


  //     const fetchRestaurants = async () => {
  //       try {
  //         const token = getTokenFromCookies();
  //         if (token) {
  //           console.log("Token found, sending to backend...");
  //           const response = await axios.get(
  //             // 'https://foodapp-backend-production-7ffe.up.railway.app/restaurant',
  //             // 'https://foodapp-backend-production-7ffe.up.railway.app/restaurant',
  //             'https://foodapp-backend-production-7ffe.up.railway.app/restaurant',
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${token}`, // Send the token with the request
  //               },
  //             });
  //           console.log("Sending token in Authorization header:", `Bearer ${token}`);
  //           console.log("Restaurants fetched:", response.data); // Debugging log

  //           if (response.data.length === 0) {
  //             // If no restaurants are returned, set an error message
  //             // setError("No restaurants in database");
  //             setMessage("No restaurants in database")
  //           } else {
  //             // Set the restaurant data if restaurants exist
  //             setRestaurants(response.data);
  //           }
  //         } else {
  //           console.log("No token found in cookies"); // Debugging log
  //         }
  //       } catch (err) {
  //         console.error("Failed to fetch restaurants:", err);
  //         setError("Failed to fetch restaurants");
  //       }
  //     };

  //     fetchUserDetails();
  //     fetchRestaurants();
  //     console.log(fetchUserDetails(), "fetchUserDetails")
  //     console.log(fetchRestaurants(), "fetchRestaurants")
  //   }
  //   else {
  //     router.push('/login');
  //   }
  // }, []);

  const handleEditRestaurant = (id) => {
    setEditRestaurantId(id);
    setShowEditModal(true);
  };

  const handleUpdateRestaurant = () => {
    axios.get('https://foodapp-backend-production-7ffe.up.railway.app/restaurant').then((response) => {
      setRestaurants(response.data);
    });
  };

  const handleDeleteRestaurant = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${id}`);
        if (response.status === 200) {
          Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
          window.location.reload()
          const updatedRestaurants = await axios.get('https://foodapp-backend-production-7ffe.up.railway.app/restaurant');
          setRestaurants(updatedRestaurants.data);
        }
      }
    } catch (err) {
      Swal.fire('Error!', 'Failed to delete restaurant.', 'error');
    }
  };

  const handleEditMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true); // Open the Edit Menu modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the Edit Menu modal
  };

  const handleUpdateMenu = async () => {
    try {
      const response = await axios.get('https://foodapp-backend-production-7ffe.up.railway.app/restaurant', {
        withCredentials: true, // Include cookies in the request
      });
      setRestaurants(response.data); // Update the restaurant list
      Swal.fire('Success', 'Menu updated successfully', 'success');
    } catch (err) {
      Swal.fire('Error', 'Failed to fetch restaurant data', 'error');
    }
  };

  const handleLogout = async () => {
    try {
      Swal.fire({
        title: 'Logging out...',
        text: 'Please wait a moment.',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      const response = await axios.post('https://foodapp-backend-production-7ffe.up.railway.app/admin/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'You have been logged out successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          setTimeout(() => {
            router.push("/admin/login");
          }, 1500);
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Logout failed. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Something went wrong: ${error.response?.data?.message || error.message}`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };


  return (
    <div>
      {/* Navbar */}
      <nav className="bg-teal-600 py-4 px-8">
        <div className="flex items-center justify-between">
          {user && (
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full object-cover border-4 border-blue-500"
                src={user.profileImage}
                alt="User Profile"
              />
              <div className="ml-4 text-white">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          <ul className="flex space-x-6">
            <Link href="/admin/dashboard">
              <li className="text-white hover:bg-teal-700 px-4 py-2 rounded-lg transition duration-300">
                Dashboard
              </li>
            </Link>
          </ul>
          {/* Add Restaurant Button in Navbar */}
          <button
            onClick={() => {
              // setLoadingAdd(true);
              setShowAddModal(true);
            }}

            className={`${loadingAdd ? "bg-gray-400" : "bg-teal-700 hover:bg-teal-800"
              } text-white px-6 py-2 rounded-lg transition duration-300`}
          >
            {loadingAdd ? "Loading..." : "Add Restaurant"}
          </button>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {message ? (
            <div className="col-span-full text-center text-xl font-semibold text-red-500">
              {message}
            </div>
          ) : Array.isArray(restaurants) && restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className="restaurant-card p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={
                      restaurant.profileImage || "https://via.placeholder.com/150"
                    }
                    alt={restaurant.name}
                    className="w-20 h-20 rounded-full border-4 border-teal-500 mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {restaurant.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Cuisine: {restaurant.cuisine || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Rating: {restaurant.rating} ★
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  {/* <button
                    onClick={() => router.push(`/admin/dashboard/${restaurant._id}`)}
                    className="w-full bg-teal-600 text-white py-2 rounded-lg mb-3 hover:bg-teal-700 transition duration-300"
                  >
                    View Details
                  </button> */}
                  {/* <button
                    onClick={async () => {
                      setLoading(true); // Set loading to true when action starts
                      try {
                        await router.push(`/admin/dashboard/${restaurant._id}`); // Simulate navigation or API call
                      } finally {
                        setLoading(false); // Reset loading to false after action completes
                      }
                    }}
                    disabled={loading} // Disable the button when loading
                    className={`w-full py-2 rounded-lg mb-3 transition duration-300 ${loading
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                      }`}
                  >
                    {loading ? "Loading..." : "View Details"}
                  </button> */}
                  {/* <button
                    onClick={async () => {
                      console.log('Button clicked');
                      setLoading(true); // Set loading to true when action starts
                      try {
                        console.log('Navigating...');
                        await router.push(`/admin/dashboard/${restaurant._id}`); // Simulate navigation or API call
                      } catch (error) {
                        console.error('Navigation error:', error);
                      } finally {
                        console.log('Action complete');
                        setLoading(false); // Reset loading to false after action completes
                      }
                    }}
                    disabled={loading} // Disable the button when loading
                    className={`w-full py-2 rounded-lg mb-3 transition duration-300 ${loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-teal-600 text-white hover:bg-teal-700"
                      }`}
                  >
                    {loading ? "Loading..." : "View Details"}
                  </button> */}
                  <button
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false); // Simulating delay
                        router.push(`/admin/dashboard/${restaurant._id}`);
                      }, 2000); // 2-second simulated delay
                    }}
                    disabled={loading}
                    className={`w-full py-2 rounded-lg mb-3 transition duration-300 ${loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-teal-600 text-white hover:bg-teal-700"
                      }`}
                  >
                    {loading ? "Loading..." : "View Details"}
                  </button>

                  <div className="flex justify-between gap-3">
                    <button
                      onClick={async () => {
                        setLoadingEdit(true);
                        await handleEditRestaurant(restaurant._id);
                        setLoadingEdit(false);
                      }}
                      disabled={loadingEdit}
                      className={`${loadingEdit ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
                        } text-white px-4 py-2 rounded-lg transition duration-300`}
                    >
                      {loadingEdit ? "Loading..." : "Edit"}
                    </button>

                    <button
                      onClick={async () => {
                        setLoadingDelete(true);
                        await handleDeleteRestaurant(restaurant._id);
                        setLoadingDelete(false);
                      }}
                      disabled={loadingDelete}
                      className={`${loadingDelete ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
                        } text-white px-4 py-2 rounded-lg transition duration-300`}
                    >
                      {loadingDelete ? "Loading..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl font-semibold text-gray-500">
              No restaurants found.
            </div>
          )}
        </div>

        {showAddModal && <AddRestaurantModal onClose={() => setShowAddModal(false)} />}
        {showEditModal && (
          <EditRestaurantModal
            restaurantId={editRestaurantId}
            onClose={() => setShowEditModal(false)}
            onUpdate={handleUpdateRestaurant}
          />
        )}

        {selectedRestaurant && isModalOpen && (
          <EditMenuModal
            restaurant={selectedRestaurant}
            onClose={handleCloseModal}
            onUpdate={handleUpdateMenu}
          />
        )}
      </div>
    </div>
  );


  // return (
  //   <div>
  //     {/* Navbar */}
  //     <nav className="bg-teal-600 py-4 px-8">
  //       <div className="flex items-center justify-between">
  //         {user && (
  //           <div className="flex items-center">
  //             <img
  //               className="w-12 h-12 rounded-full object-cover border-4 border-blue-500"
  //               src={user.profileImage}
  //               alt="User Profile"
  //             />
  //             <div className="ml-4 text-white">
  //               <h2 className="text-lg font-semibold">{user.name}</h2>
  //               <p className="text-sm">{user.email}</p>
  //             </div>
  //           </div>
  //         )}
  //         <ul className="flex space-x-6">
  //           <Link href="/admin/dashboard">
  //             <li className="text-white hover:bg-teal-700 px-4 py-2 rounded-lg transition duration-300">
  //               Dashboard
  //             </li>
  //           </Link>
  //           {/* Add more menu items here */}
  //         </ul>
  //         {/* Add Restaurant Button in Navbar */}
  //         <button
  //           onClick={() => setShowAddModal(true)}
  //           className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition duration-300"
  //         >
  //           Add Restaurant
  //         </button>
  //         {/* Logout Button */}
  //         <button
  //           onClick={handleLogout}
  //           className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 flex items-center"
  //         >
  //           <FaSignOutAlt className="mr-2" />
  //           Logout
  //         </button>
  //       </div>
  //     </nav>

  //     {/* Main Content */}
  //     <div className="p-4">
  //       <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>

  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  //         {message ? (
  //           <div className="col-span-full text-center text-xl font-semibold text-red-500">
  //             {message}
  //           </div>
  //         ) : (
  //           Array.isArray(restaurants) && restaurants.length > 0 ? (
  //             restaurants.map((restaurant) => (
  //               <div key={restaurant._id} className="restaurant-card p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
  //                 <div className="flex items-center mb-4">
  //                   <img
  //                     src={restaurant.profileImage || "https://via.placeholder.com/150"}
  //                     alt={restaurant.name}
  //                     className="w-20 h-20 rounded-full border-4 border-teal-500 mr-4"
  //                   />
  //                   <div>
  //                     <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
  //                     <p className="text-sm text-gray-500">Cuisine: {restaurant.cuisine || 'N/A'}</p>
  //                     <p className="text-sm text-gray-500">Rating: {restaurant.rating} ★</p>
  //                   </div>
  //                 </div>

  //                 <div className="mt-4">
  //                   <button
  //                     onClick={() => router.push(`/admin/dashboard/${restaurant._id}`)}
  //                     className="w-full bg-teal-600 text-white py-2 rounded-lg mb-3 hover:bg-teal-700 transition duration-300"
  //                   >
  //                     View Details
  //                   </button>

  //                   <div className="flex justify-between gap-3">
  //                     <button
  //                       onClick={() => handleEditRestaurant(restaurant._id)}
  //                       className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
  //                     >
  //                       Edit
  //                     </button>

  //                     <button
  //                       onClick={() => handleDeleteRestaurant(restaurant._id)}
  //                       className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
  //                     >
  //                       Delete
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))
  //           ) : (
  //             <div className="col-span-full text-center text-xl font-semibold text-gray-500">
  //               No restaurants found.
  //             </div>
  //           )
  //         )}
  //       </div>

  //       {showAddModal && <AddRestaurantModal onClose={() => setShowAddModal(false)} />}
  //       {showEditModal && (
  //         <EditRestaurantModal
  //           restaurantId={editRestaurantId}
  //           onClose={() => setShowEditModal(false)}
  //           onUpdate={handleUpdateRestaurant}
  //         />
  //       )}

  //       {selectedRestaurant && isModalOpen && (
  //         <EditMenuModal
  //           restaurant={selectedRestaurant}
  //           onClose={handleCloseModal}
  //           onUpdate={handleUpdateMenu}
  //         />
  //       )}
  //     </div>
  //   </div>
  // );

}

