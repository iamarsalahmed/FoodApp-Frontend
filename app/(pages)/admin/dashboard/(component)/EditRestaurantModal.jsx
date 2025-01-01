import { useState, useEffect } from 'react';
import axios from 'axios';

function EditRestaurantModal({ restaurantId, onClose, onUpdate }) {
  const [restaurant, setRestaurant] = useState({ name: '', cuisine: '', rating: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch restaurant details by ID
    async function fetchRestaurant() {
      try {
        const response = await axios.get(`https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${restaurantId}`);
        setRestaurant(response.data);
      } catch (err) {
        setError('Failed to fetch restaurant data');
        console.error('Error fetching restaurant:', err);
      }
    }
    fetchRestaurant();
  }, [restaurantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Send a PUT request to update the restaurant
      await axios.put(`https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${restaurantId}`, restaurant);
      onUpdate(); // Refresh restaurant list after update
      onClose(); 
      window.location.reload() // Close modal
    } catch (err) {
      setError('Failed to update restaurant');
      console.error('Error updating restaurant:', err);
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Edit Restaurant</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Restaurant Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cuisine" className="block text-sm font-semibold">Cuisine</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={restaurant.cuisine}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-semibold">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={restaurant.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            min="1"
            max="5"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRestaurantModal;
