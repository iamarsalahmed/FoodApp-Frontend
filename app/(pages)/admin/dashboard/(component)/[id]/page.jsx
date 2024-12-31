// 'use client';
// import { useParams } from "next/navigation";

// const RestaurantDetail = () => {
//   const params = useParams();
//   const restaurantId = params.id;

//   // Replace with dynamic data fetching logic
//   const restaurant = {
//     id: restaurantId,
//     name: "The Spice Room",
//     location: "New York",
//     description: "A luxurious fine dining experience with exquisite cuisines.",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-gray-800">{restaurant.name}</h1>
//         <button
//           onClick={() => alert("Edit functionality here")}
//           className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
//         >
//           Edit Restaurant
//         </button>
//       </header>

//       <div className="mt-6 bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold text-gray-800">Details</h2>
//         <p className="mt-2 text-gray-600">
//           <strong>Location:</strong> {restaurant.location}
//         </p>
//         <p className="mt-2 text-gray-600">
//           <strong>Description:</strong> {restaurant.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RestaurantDetail;
// "use client"
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const RestaurantDetails = ({ params }) => {
//   const [restaurant, setRestaurant] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchRestaurant() {
//       try {
//         const response = await axios.get(`http://localhost:3001/restaurant/${params.id}`);
//         setRestaurant(response.data);
//       } catch (err) {
//         setError('Failed to fetch restaurant details');
//       }
//     }
//     fetchRestaurant();
//   }, [params.id]);

//   if (error) return <div>{error}</div>;

//   if (!restaurant) return <div>Loading...</div>;

//   return (
//     <div className="restaurant-details p-4">
//       <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
//       <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
//       <p><strong>Rating:</strong> {restaurant.rating}</p>
//       <p><strong>Description:</strong> {restaurant.description}</p>

//       <div className="menu mt-4">
//         <h2 className="text-xl font-semibold mb-2">Menu</h2>
//         <ul>
//           {restaurant.menu.map((item, index) => (
//             <li key={index} className="border-b py-2">
//               <p className="font-semibold">{item.name}</p>
//               <p>{item.description}</p>
//               <p><strong>Price:</strong> ${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantDetails;
// "use client";
// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const RestaurantDetails = ({ params }) => {
//   const [restaurant, setRestaurant] = useState(null);
//   const [error, setError] = useState(null);

//   // Use React.use() to unwrap the params.
//   const id = React.use(params?.id);

//   useEffect(() => {
//     if (!id) return; // Check if id exists
//     async function fetchRestaurant() {
//       try {
//         const response = await axios.get(`http://localhost:3001/restaurant/${id}`);
//         setRestaurant(response.data);
//       } catch (err) {
//         setError('Failed to fetch restaurant details');
//       }
//     }
//     fetchRestaurant();
//   }, [id]); // Use id as the dependency here

//   if (error) return <div>{error}</div>;

//   if (!restaurant) return <div>Loading...</div>;

//   return (
//     <div className="restaurant-details p-4">
//       <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
//       <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
//       <p><strong>Rating:</strong> {restaurant.rating}</p>
//       <p><strong>Description:</strong> {restaurant.description}</p>

//       <div className="menu mt-4">
//         <h2 className="text-xl font-semibold mb-2">Menu</h2>
//         <ul>
//           {restaurant.menu.map((item, index) => (
//             <li key={index} className="border-b py-2">
//               <p className="font-semibold">{item.name}</p>
//               <p>{item.description}</p>
//               <p><strong>Price:</strong> ${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantDetails;
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

//   return (
//     <div className="restaurant-details p-4">
//       <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
//       <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
//       <p><strong>Rating:</strong> {restaurant.rating}</p>
//       <p><strong>Description:</strong> {restaurant.description}</p>

//       <div className="menu mt-4">
//         <h2 className="text-xl font-semibold mb-2">Menu</h2>
//         <ul>
//         {restaurant.menu && restaurant.menu.length > 0 ? (
//   <ul>
//     {restaurant.menu.map((menuItem) => (
//       <li key={menuItem._id} className="flex items-center mb-5">
//         <img
//           src={menuItem.imageUrl}  // Display image for each menu item
//           alt={menuItem.itemName}  // Alt text for accessibility
//           className="w-24 h-24 object-cover mr-4"  // Tailwind classes for image styling
//         />
//         <div className="flex flex-col">
//           <h3 className="text-xl font-bold">{menuItem.itemName}</h3>
//           <p className="text-gray-600">{menuItem.description}</p>
//           <p className="text-lg font-semibold text-green-500">${menuItem.price}</p>
//         </div>
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p className="text-gray-500">No menu items available</p>
// )}

//         </ul>
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
            <li key={menuItem._id} className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center border-l-4 border-teal-500">
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


