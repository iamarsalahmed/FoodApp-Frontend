// app/admin/dashboard/[id]/RestaurantDetails.jsx
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const RestaurantDetails = ({ restaurant }) => {
  const [editingMenuItem, setEditingMenuItem] = useState(null); 
  const [editedItem, setEditedItem] = useState({ itemName: '', description: '', price: '', imageUrl: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleEditClick = (menuItem) => {
    setEditingMenuItem(menuItem);
    setEditedItem({
      itemName: menuItem.itemName,
      description: menuItem.description,
      price: menuItem.price,
      imageUrl: menuItem.imageUrl || '', // Ensure the image URL is also populated
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!editedItem.itemName || !editedItem.description || !editedItem.price || !editedItem.imageUrl) return;

    try {
      await axios.put(
        `http://localhost:3001/restaurant/${restaurant._id}/menu/${editingMenuItem._id}`,
        {
          itemName: editedItem.itemName,
          description: editedItem.description,
          price: editedItem.price,
          imageUrl: editedItem.imageUrl, // Include the updated image URL
        }
      );
      setIsModalOpen(false);
      window.location.reload();
      const response = await axios.get(`http://localhost:3001/restaurant/${restaurant._id}`);
      setRestaurant(response.data);
    } catch (err) {
      setError('Failed to update menu item');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (error) return <div>{error}</div>;

  if (!restaurant) return <div>Loading...</div>;

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
                  src={menuItem.imageUrl || "https://via.placeholder.com/150"} // Use placeholder if no image URL is present
                  alt={menuItem.itemName}
                  className="w-36 h-36 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{menuItem.itemName}</h3>
                <p className="text-gray-600 text-sm mb-2">{menuItem.description}</p>
                <p className="text-lg font-semibold text-teal-500 mb-4">${menuItem.price}</p>
                <button
                  onClick={() => handleEditClick(menuItem)}
                  className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
                >
                  Edit This Item
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No menu items available</p>
        )}
      </div>

      {/* Modal for Editing Menu Item */}
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Edit Menu Item</h3>
            <div>
              <label htmlFor="itemName" className="block mb-2">Item Name</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={editedItem.itemName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={editedItem.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={editedItem.price}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block mb-2">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={editedItem.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
