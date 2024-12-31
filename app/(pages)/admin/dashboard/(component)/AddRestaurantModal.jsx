
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const AddRestaurantModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    owner: '',
    menu: [],
    profileImage: null, // Add profile image field
  });
  
  useEffect(() => {
    const getTokenFromCookies = () => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('jwt'))
        ?.split('=')[1];
      console.log('Token from cookies:', token); // Log the token retrieved from cookies
      return token;
    };
  
    const getUserFromToken = (token) => {
      try {
        const decodedToken = jwtDecode(token);
        console.log('Decoded Token:', decodedToken); // Log the decoded token
        return decodedToken; // Assuming the token contains user ID
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    };
  
    const fetchUserDetails = () => {
      const token = getTokenFromCookies();
      if (token) {
        const decodedToken = getUserFromToken(token);
        if (decodedToken) {
          const userId = decodedToken.userId;
          console.log('User ID from decoded token:', userId); // Log the userId
          setFormData((prevData) => ({
            ...prevData,
            owner: userId, // Set the userId (owner) from decoded token
          }));
        }
      }
    };
  
    fetchUserDetails();
  }, []);
  
  const handleInputChange = (e) => {
    console.log(`Input change detected: ${e.target.name} = ${e.target.value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleMenuChange = (index, e) => {
    console.log(`Menu change detected at index ${index}: ${e.target.name} = ${e.target.value}`);
    const updatedMenu = [...formData.menu];
    updatedMenu[index][e.target.name] = e.target.value;
    setFormData({ ...formData, menu: updatedMenu });
  };
  
  const addMenuItem = () => {
    console.log('Adding new menu item');
    setFormData({
      ...formData,
      menu: [...formData.menu, { itemName: '', description: '', price: '', imageUrl: '' }],
    });
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log('Image file selected for upload:', file);
    setFormData({ ...formData, profileImage: file });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileImageUrl = null;
  
    console.log('Submitting form data:', formData);
  
    // Upload profile image to Cloudinary
    if (formData.profileImage) {
      const uploadData = new FormData();
      uploadData.append('file', formData.profileImage);
      uploadData.append('upload_preset', 'Foodpanda');
  
      try {
        const uploadRes = await axios.post(
          'https://api.cloudinary.com/v1_1/dhe8oxf2v/image/upload',
          uploadData
        );
        profileImageUrl = uploadRes.data.secure_url;
        console.log('Uploaded profile image URL:', profileImageUrl);
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return;
      }
    }
  
    // Submit form data to backend
    const payload = {
      ...formData,
      profileImage: profileImageUrl,
    };
  
    console.log('Payload being sent to backend:', payload);
  
    try {
      await axios.post('http://localhost:3001/restaurant', payload);
      console.log('Restaurant added successfully');
      onClose();
      // window.location.reload();
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-y-auto max-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold">Restaurant Name</label>
            <input
              id="name"
              name="name"
              placeholder="Restaurant Name"
              className="input mb-2"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block font-semibold">
              Upload Profile Image
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="owner" className="block font-semibold">Owner ID</label>
            <input
              id="owner"
              name="owner"
              placeholder="Owner ID"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleInputChange}
              required
              readOnly
              value={formData.owner}  // Set value to reflect state
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cuisine" className="block font-semibold">Cuisine</label>
            <input
              id="cuisine"
              name="cuisine"
              placeholder="Cuisine"
              className="w-full p-2 mb-3 border rounded"
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="mb-4">
              <label htmlFor="street" className="block font-semibold">Street</label>
              <input
                id="street"
                name="street"
                placeholder="Street"
                className="p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block font-semibold">City</label>
              <input
                id="city"
                name="city"
                placeholder="City"
                className="p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block font-semibold">State</label>
              <input
                id="state"
                name="state"
                placeholder="State"
                className="p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="postalCode" className="block font-semibold">Postal Code</label>
              <input
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                className="p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Menu Items</h3>
            {formData.menu?.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-3 mb-3">
                <div className="mb-4">
                  <label htmlFor={`itemName-${index}`} className="block font-semibold">Item Name</label>
                  <input
                    id={`itemName-${index}`}
                    name="itemName"
                    placeholder="Item Name"
                    className="p-2 border rounded"
                    value={item.itemName}
                    onChange={(e) => handleMenuChange(index, e)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`description-${index}`} className="block font-semibold">Description</label>
                  <input
                    id={`description-${index}`}
                    name="description"
                    placeholder="Description"
                    className="p-2 border rounded"
                    value={item.description}
                    onChange={(e) => handleMenuChange(index, e)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`price-${index}`} className="block font-semibold">Price</label>
                  <input
                    id={`price-${index}`}
                    name="price"
                    placeholder="Price"
                    type="number"
                    className="p-2 border rounded"
                    value={item.price}
                    onChange={(e) => handleMenuChange(index, e)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`imageUrl-${index}`} className="block font-semibold">Image URL</label>
                  <input
                    id={`imageUrl-${index}`}
                    name="imageUrl"
                    placeholder="Image URL"
                    className="p-2 border rounded"
                    value={item.imageUrl}
                    onChange={(e) => handleMenuChange(index, e)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="text-blue-500"
              onClick={addMenuItem}
            >
              + Add Menu Item
            </button>
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>

        <button
          className="mt-2 text-red-500"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
