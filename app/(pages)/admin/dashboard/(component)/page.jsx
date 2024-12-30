
// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';  // Import SweetAlert2
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import Link from 'next/link';
// import EditRestaurantModal from './EditRestaurantModal';
// import AddRestaurantModal from './AddRestaurantModal';
// import { FaUsers, FaTasks, FaCog, FaHome,FaEdit,FaTrashAl,FaCheckCircle,FaSignOutAlt } from "react-icons/fa"



// export default function Dashboard() {
//   const [restaurants, setRestaurants] = useState([]);  // State for restaurants
//   const [error, setError] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editRestaurantId, setEditRestaurantId] = useState(null);
//   const router = useRouter(); // Initialize the router

//   // Fetch restaurants using useEffect
//   useEffect(() => {
//     async function fetchRestaurants() {
//       try {
//         const response = await axios.get('http://localhost:3001/restaurant');
//         setRestaurants(response.data);
//       } catch (err) {
//         setError('Failed to fetch restaurants');
//       }
//     }
//     fetchRestaurants();
//   }, []);

//   const handleEditRestaurant = (id) => {
//     setEditRestaurantId(id);
//     setShowEditModal(true);
//   };

//   const handleUpdateRestaurant = () => {
//     // Refresh the restaurant list after updating
//     axios.get('http://localhost:3001/restaurant').then((response) => {
//       setRestaurants(response.data);
//     });
//   };

//   const handleDeleteRestaurant = async (id) => {
//     try {
//       // Show confirmation dialog
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: 'This action cannot be undone!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         cancelButtonColor: '#3085d6',
//         confirmButtonText: 'Yes, delete it!',
//       });

//       if (result.isConfirmed) {
//         // Proceed with deletion if confirmed
//         const response = await axios.delete(`http://localhost:3001/restaurant/${id}`);

//         if (response.status === 200) {
//           Swal.fire(
//             'Deleted!',
//             'The restaurant has been deleted.',
//             'success'
//           );

//           // Re-fetch the restaurant list after deletion
//           const updatedRestaurants = await axios.get('http://localhost:3001/restaurant');
//           setRestaurants(updatedRestaurants.data);  // This will update the state
//         } else {
//           throw new Error('Failed to delete restaurant');
//         }
//       }
//     } catch (err) {
//       console.error('Delete error:', err); // Log the error for debugging
//       Swal.fire(
//         'Error!',
//         'Failed to delete restaurant. ' + (err.response?.data?.message || 'Please try again later.'),
//         'error'
//       );
//     }
//   };
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

//       const response = await axios.post('http://localhost:3001/admin/logout', {}, { withCredentials: true });
//       console.log('Logout response:', response);

//       if (response.status === 200) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'You have been logged out successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         }).then(() => {
//           setTimeout(() => {
//             router.push("/admin/login");
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
//           {/* {user && (
//             <div className="p-4 flex flex-col items-center">
//               <img
//                 className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
//                 src={user.profileImage}
//                 alt="User Profile"
//               />
//               <h2 className="mt-4 text-lg font-semibold text-gray-800">{user.name}</h2>
//               <p className="text-sm text-gray-600">{user.email}</p>
//             </div>
//           )} */}
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

//       {/* Dashboard Content */}
//       <div className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => setShowAddModal(true)}
//         >
//           Add Restaurant
//         </button>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {error ? (
//             <div className="col-span-full text-center text-lg font-semibold text-red-500">
//               {error}
//             </div>
//           ) : restaurants.length === 0 ? (
//             <div className="col-span-full text-center text-lg font-semibold text-gray-500">
//               No restaurants in the database.
//             </div>
//           ) : (
//             restaurants.map((restaurant) => (
//               <div key={restaurant._id} className="restaurant-card p-4 border rounded shadow hover:shadow-lg">
//                 <button
//                   onClick={() => router.push(`/admin/dashboard/${restaurant._id}`)} // Redirect to dynamic restaurant page
//                   className="w-full text-left"
//                 >
//                   <h2 className="font-semibold">{restaurant.name}</h2>
//                   <p>Cuisine: {restaurant.cuisine || 'N/A'}</p>
//                   <p>Rating: {restaurant.rating}</p>
//                 </button>

//                 <div className="mt-2 flex justify-between">
//                   <button
//                     onClick={() => handleEditRestaurant(restaurant._id)}
//                     className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteRestaurant(restaurant._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {showAddModal && <AddRestaurantModal onClose={() => setShowAddModal(false)} />}
//         {showEditModal && (
//           <EditRestaurantModal
//             restaurantId={editRestaurantId}
//             onClose={() => setShowEditModal(false)}
//             onUpdate={handleUpdateRestaurant}
//           />
//         )}
//       </div>
//     </div>
//   );

// }
// "use client";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import EditRestaurantModal from './EditRestaurantModal';
// import AddRestaurantModal from './AddRestaurantModal';
// import { FaEdit, FaTrash,FaHome,FaUsers, FaTasks, FaCog,FaSignOutAlt } from "react-icons/fa";
// import Link from 'next/link'; 
// import EditMenuModal from './EditMenuModal';


// export default function Dashboard() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [error, setError] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editRestaurantId, setEditRestaurantId] = useState(null);
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null); // To hold restaurant for menu editing
//   const [isModalOpen, setIsModalOpen] = useState(false);



//   const router = useRouter();

//   useEffect(() => {
//     async function fetchRestaurants() {
//       try {
//         const response = await axios.get('http://localhost:3001/restaurant');
//         setRestaurants(response.data);
//       } catch (err) {
//         setError('Failed to fetch restaurants');
//       }
//     }
//     fetchRestaurants();
//   }, []);

//   const handleEditRestaurant = (id) => {
//     setEditRestaurantId(id);
//     setShowEditModal(true);
//   };

//   const handleUpdateRestaurant = () => {
//     axios.get('http://localhost:3001/restaurant').then((response) => {
//       setRestaurants(response.data);
//     });
//   };

//   const handleDeleteRestaurant = async (id) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: 'This action cannot be undone!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         cancelButtonColor: '#3085d6',
//         confirmButtonText: 'Yes, delete it!',
//       });

//       if (result.isConfirmed) {
//         const response = await axios.delete(`http://localhost:3001/restaurant/${id}`);
//         if (response.status === 200) {
//           Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
//           const updatedRestaurants = await axios.get('http://localhost:3001/restaurant');
//           setRestaurants(updatedRestaurants.data);
//         }
//       }
//     } catch (err) {
//       Swal.fire('Error!', 'Failed to delete restaurant.', 'error');
//     }
//   };

//   // Function to fetch and update the menu
//   // const handleEditMenu = (restaurant) => {
//   //   setSelectedRestaurant(restaurant);
//   //   // Open a modal to edit the menu (not implemented yet)
//   //   console.log('Editing menu for:', restaurant);
//   // };
//   const handleEditMenu = (restaurant) => {
//     setSelectedRestaurant(restaurant);
//     setIsModalOpen(true);
//   };
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleUpdateMenu = async () => {
//     try {
//       // Refetch the restaurant data (or specific restaurant data)
//       const response = await axios.get('http://localhost:3001/restaurant');
//       setRestaurants(response.data); // Update the state with the latest data
//       Swal.fire('Success', 'Menu updated successfully', 'success'); // Show a success message
//     } catch (err) {
//       Swal.fire('Error', 'Failed to fetch restaurant data', 'error'); // Show an error message if fetching fails
//     }
//   };
//   const handleLogout = async () => {
//         try {
//           Swal.fire({
//             title: 'Logging out...',
//             text: 'Please wait a moment.',
//             icon: 'info',
//             allowOutsideClick: false,
//             showConfirmButton: false,
//             didOpen: () => Swal.showLoading(),
//           });
    
//           const response = await axios.post('http://localhost:3001/admin/logout', {}, { withCredentials: true });
//           console.log('Logout response:', response);
    
//           if (response.status === 200) {
//             Swal.fire({
//               title: 'Success!',
//               text: 'You have been logged out successfully.',
//               icon: 'success',
//               confirmButtonText: 'OK',
//             }).then(() => {
//               setTimeout(() => {
//                 router.push("/admin/login");
//               }, 1500);
//             });
//           } else {
//             Swal.fire({
//               title: 'Error',
//               text: 'Logout failed. Please try again.',
//               icon: 'error',
//               confirmButtonText: 'OK',
//             });
//           }
//         } catch (error) {
//           console.error('Error during logout:', error);
//           Swal.fire({
//             title: 'Error',
//             text: `Something went wrong: ${error.response?.data?.message || error.message}`,
//             icon: 'error',
//             confirmButtonText: 'OK',
//           });
//         }
//       };













//   return (
//     <div className="flex">
//       <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen">
//         <div>

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

//       <div className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => setShowAddModal(true)}
//         >
//           Add Restaurant
//         </button>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {restaurants.map((restaurant) => (
//             <div key={restaurant._id} className="restaurant-card p-4 border rounded shadow hover:shadow-lg">
//               <h2 className="font-semibold">{restaurant.name}</h2>
//               <p>Cuisine: {restaurant.cuisine || 'N/A'}</p>
//               <p>Rating: {restaurant.rating}</p>

//               {/* Menu Management */}
//               <button
//                 onClick={() => handleEditMenu(restaurant)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//               >
//                 Edit Menu
//               </button>

//               <div className="mt-2 flex justify-between">
//                 <button
//                   onClick={() => handleEditRestaurant(restaurant._id)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteRestaurant(restaurant._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showAddModal && <AddRestaurantModal onClose={() => setShowAddModal(false)} />}
//         {showEditModal && (
//           <EditRestaurantModal
//             restaurantId={editRestaurantId}
//             onClose={() => setShowEditModal(false)}
//             onUpdate={handleUpdateRestaurant}
//           />
//         )}

//         {/* Menu Edit Modal (example) */}
//         {selectedRestaurant && (
//           <div className="menu-edit-modal">
//             <h2>Edit Menu for {selectedRestaurant.name}</h2>
//             {/* Menu editing form or UI */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
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

export default function Dashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editRestaurantId, setEditRestaurantId] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); // For menu editing modal

  const router = useRouter();

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get('http://localhost:3001/restaurant');
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to fetch restaurants');
      }
    }
    fetchRestaurants();
  }, []);

  const handleEditRestaurant = (id) => {
    setEditRestaurantId(id);
    setShowEditModal(true);
  };

  const handleUpdateRestaurant = () => {
    axios.get('http://localhost:3001/restaurant').then((response) => {
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
        const response = await axios.delete(`http://localhost:3001/restaurant/${id}`);
        if (response.status === 200) {
          Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
          const updatedRestaurants = await axios.get('http://localhost:3001/restaurant');
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
      const response = await axios.get('http://localhost:3001/restaurant', {
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

      const response = await axios.post('http://localhost:3001/admin/logout', {}, { withCredentials: true });
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
    <div className="flex">
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen">
        <div>
          <nav className="mt-6">
            <ul>
              <Link href="/dashboard">
                <li className="p-4 hover:bg-gray-200 flex items-center">
                  <FaHome className="mr-3 text-indigo-600" />
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/teams">
                <li className="p-4 hover:bg-gray-200 flex items-center">
                  <FaUsers className="mr-3 text-indigo-600" />
                  Teams
                </li>
              </Link>
              <li className="p-4 hover:bg-gray-200 flex items-center">
                <FaTasks className="mr-3 text-green-600" />
                Tasks
              </li>
              <li className="p-4 hover:bg-gray-200 flex items-center">
                <FaCog className="mr-3 text-gray-600" />
                Settings
              </li>
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

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowAddModal(true)}
        >
          Add Restaurant
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {restaurants.map((restaurant) => (
             <div key={restaurant._id} className="restaurant-card p-4 border rounded shadow hover:shadow-lg">
             <button
               onClick={() => router.push(`/admin/dashboard/${restaurant._id}`)} // Redirect to dynamic restaurant page
               className="w-full text-left"
             >
               <h2 className="font-semibold">{restaurant.name}</h2>
               <p>Cuisine: {restaurant.cuisine || 'N/A'}</p>
               <p>Rating: {restaurant.rating}</p>
             </button>
 
             <div className="mt-2 flex justify-between">
               <button
                 onClick={() => handleEditRestaurant(restaurant._id)}
                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
               >
                 Edit
               </button>
               <button
                onClick={() => handleEditMenu(restaurant)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit Menu
              </button>
               <button
                 onClick={() => handleDeleteRestaurant(restaurant._id)}
                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
               >
                 Delete
               </button>
             </div>
           </div>
          ))}
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
}

  