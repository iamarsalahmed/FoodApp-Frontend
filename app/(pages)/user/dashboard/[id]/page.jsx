"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantDetails = ({ params }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  // Unwrap params using React.use() before accessing its properties
  const { id } = React.use(params); // Unwrap params here

  useEffect(() => {
    if (!id) return; // Ensure id is available before making the API request

    async function fetchRestaurant() {
      try {
        const response = await axios.get(`http://localhost:3001/restaurant/${id}`);
        setRestaurant(response.data);
      } catch (err) {
        setError('Failed to fetch restaurant details');
      }
    }

    fetchRestaurant();
  }, [id]); // Only run the effect when id changes

  if (error) return <div>{error}</div>;

  if (!restaurant) return <div>Loading...</div>;

// return (
//   <div className="restaurant-details p-6 bg-gray-50 min-h-screen">
//     {/* Profile Section */}
//     <div className="flex items-center mb-8">
//       <img
//         src={restaurant.profileImage || "https://via.placeholder.com/150"}
//         alt={restaurant.name}
//         className="w-32 h-32 rounded-full border-4 border-indigo-600 mr-6"
//       />
//       <div className="text-center flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-extrabold text-gray-800">{restaurant.name}</h1>
//         <p className="text-lg text-gray-600 mt-2">{restaurant.cuisine} Cuisine</p>
//         <p className="text-sm text-gray-500 mt-1">Rating: {restaurant.rating} ★</p>
//       </div>
//     </div>

//     {/* Description */}
//     <div className="description mb-8">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-2">About the Restaurant</h2>
//       <p className="text-gray-600">{restaurant.description}</p>
//     </div>

//     {/* Menu Section */}
//     <div className="menu mt-8">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">Menu</h2>
//       {restaurant.menu && restaurant.menu.length > 0 ? (
//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {restaurant.menu.map((menuItem) => (
//             <li key={menuItem._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
//               <img
//                 src={menuItem.imageUrl}
//                 alt={menuItem.itemName}
//                 className="w-36 h-36 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-bold text-gray-800">{menuItem.itemName}</h3>
//               <p className="text-gray-600 text-sm mb-2">{menuItem.description}</p>
//               <p className="text-lg font-semibold text-green-500 mb-4">${menuItem.price}</p>
//               <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
//                 Add to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No menu items available</p>
//       )}
//     </div>
//   </div>
// );
// return (
//     <div className="restaurant-details p-6 bg-gray-50 min-h-screen">
//       {/* Profile Section */}
//       <div className="flex items-center mb-8">
//         <img
//           src={restaurant.profileImage || "https://via.placeholder.com/150"}
//           alt={restaurant.name}
//           className="w-32 h-32 rounded-full border-4 border-indigo-600 mr-6"
//         />
//         <div className="text-center flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-extrabold text-gray-800">{restaurant.name}</h1>
//           <p className="text-lg text-gray-600 mt-2">{restaurant.cuisine} Cuisine</p>
//           <p className="text-sm text-gray-500 mt-1">Rating: {restaurant.rating} ★</p>
//         </div>
//       </div>
  
//       {/* Description */}
//       <div className="description mb-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">About the Restaurant</h2>
//         <p className="text-gray-600">{restaurant.description}</p>
//       </div>
  
//       {/* Menu Section */}
//       <div className="menu mt-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Menu</h2>
//         {restaurant.menu && restaurant.menu.length > 0 ? (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {restaurant.menu.map((menuItem) => (
//               <li key={menuItem._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
//                 <img
//                   src={menuItem.imageUrl}
//                   alt={menuItem.itemName}
//                   className="w-36 h-36 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-800">{menuItem.itemName}</h3>
//                 <p className="text-gray-600 text-sm mb-2">{menuItem.description}</p>
//                 <p className="text-lg font-semibold text-green-500 mb-4">${menuItem.price}</p>
//                 <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
//                   Add to Cart
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No menu items available</p>
//         )}
//       </div>
//     </div>
//   );
// return (
//     <div className="restaurant-details p-6 bg-gray-100 min-h-screen">
//       {/* Profile Section */}
//       <div className="flex items-center mb-8">
//         <img
//           src={restaurant.profileImage || "https://via.placeholder.com/150"}
//           alt={restaurant.name}
//           className="w-32 h-32 rounded-full border-4 border-teal-500 mr-6"
//         />
//         <div className="text-center flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-extrabold text-teal-700">{restaurant.name}</h1>
//           <p className="text-lg text-teal-600 mt-2">{restaurant.cuisine} Cuisine</p>
//           <p className="text-sm text-gray-500 mt-1">Rating: {restaurant.rating} ★</p>
//         </div>
//       </div>
  
//       {/* Description */}
//       <div className="description mb-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">About the Restaurant</h2>
//         <p className="text-gray-600">{restaurant.description}</p>
//       </div>
  
//       {/* Menu Section */}
//       <div className="menu mt-8">
//         <h2 className="text-2xl font-semibold text-teal-700 mb-4">Menu</h2>
//         {restaurant.menu && restaurant.menu.length > 0 ? (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {restaurant.menu.map((menuItem) => (
//               <li key={menuItem._id} className="bg-white shadow-xl rounded-lg p-4 flex flex-col items-center text-center border-l-4 border-teal-500">
//                 <img
//                   src={menuItem.imageUrl}
//                   alt={menuItem.itemName}
//                   className="w-36 h-36 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-800">{menuItem.itemName}</h3>
//                 <p className="text-gray-600 text-sm mb-2">{menuItem.description}</p>
//                 <p className="text-lg font-semibold text-teal-500 mb-4">${menuItem.price}</p>
//                 <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//                   Add to Cart
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No menu items available</p>
//         )}
//       </div>
//     </div>
//   );
return (
    <div className="restaurant-details p-6 bg-gray-50 min-h-screen">
      {/* Profile Section */}
      <div className="flex items-center mb-8">
        <img
          src={restaurant.profileImage || "https://via.placeholder.com/150"}
          alt={restaurant.name}
          className="w-32 h-32 rounded-full border-4 border-teal-500 mr-6"
        />
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-teal-700">{restaurant.name}</h1>
          <p className="text-lg text-teal-600 mt-2">{restaurant.cuisine} Cuisine</p>
          <p className="text-sm text-gray-500 mt-1">Rating: {restaurant.rating} ★</p>
        </div>
      </div>
  
      {/* Description */}
      <div className="description mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">About the Restaurant</h2>
        <p className="text-gray-600">{restaurant.description}</p>
      </div>
  
      {/* Menu Section */}
      <div className="menu mt-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Menu</h2>
        {restaurant.menu && restaurant.menu.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurant.menu.map((menuItem) => (
              <li key={menuItem._id} className="bg-white shadow-xl rounded-lg p-4 flex flex-col items-center text-center border-l-4 border-teal-500">
                <img
                  src={menuItem.imageUrl}
                  alt={menuItem.itemName}
                  className="w-36 h-36 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{menuItem.itemName}</h3>
                <p className="text-gray-600 text-sm mb-2">{menuItem.description}</p>
                <p className="text-lg font-semibold text-teal-500 mb-4">${menuItem.price}</p>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No menu items available</p>
        )}
      </div>
    </div>
  );
  
};

export default RestaurantDetails;


