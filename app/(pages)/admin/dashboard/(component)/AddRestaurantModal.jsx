// 'use client'
// import { useState } from 'react';

// const AddRestaurantModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cuisine: '',
//     street: '',
//     city: '',
//     state: '',
//     postalCode: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch('/api/restaurants', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
//     onClose();
//     // Optionally, refresh the data
//   };

//   return (
//     <div className="modal-bg">
//       <div className="modal p-4 rounded shadow bg-white">
//         <h2 className="font-bold mb-4">Add Restaurant</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Restaurant Name"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <input
//             name="cuisine"
//             placeholder="Cuisine"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <input
//             name="street"
//             placeholder="Street"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <input
//             name="city"
//             placeholder="City"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <input
//             name="state"
//             placeholder="State"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <input
//             name="postalCode"
//             placeholder="Postal Code"
//             className="input mb-2"
//             onChange={handleInputChange}
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Save
//           </button>
//         </form>
//         <button className="mt-2 text-red-500" onClick={onClose}>
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddRestaurantModal;
// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

// const AddRestaurantModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cuisine: '',
//     street: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     owner: '',  // Added this to hold userId (owner)
//   });

//   // useEffect(() => {
//   //   // Function to fetch the JWT token from cookies
//   //   const getTokenFromCookies = () => {
//   //     console.log("Fetching token from cookies..."); // Debugging log
//   //     const token = document.cookie
//   //       .split("; ")
//   //       .find((row) => row.startsWith("jwt"))
//   //       ?.split("=")[1];
//   //     console.log("JWT Token:",token); // Log the token (if found)
//   //     // return token;
//   //   };

//   //   // Function to decode the JWT token and extract user details
//   //   const getUserFromToken = (token) => {
//   //     console.log("Decoding token:", token); // Log the token before decoding
//   //     try {
//   //       const decodedToken = jwtDecode(token);
//   //       console.log("Decoded Token:", decodedToken); // Log the decoded token
//   //       return decodedToken; // Assuming the token contains user ID
//   //     } catch (error) {
//   //       console.error("Error decoding token:", error); // Error handling log
//   //     }
//   //   };

//   //   // Fetching data from the API
//   //   const fetchUserDetails = async () => {
//   //     console.log("Starting fetchUserDetails function..."); // Debugging log
//   //     try {
//   //       const token = getTokenFromCookies();
//   //       if (token) {
//   //         console.log("Token found. Proceeding with user decoding..."); // Debugging log
//   //         const userId = getUserFromToken(token);
//   //         console.log("Decoded User ID:", userId); // Log userId

//   //         // Fetching user data from the API
//   //         const response = await axios.get("http://localhost:3001/auth/userDetails", {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         });
//   //         console.log("API Response:", response); // Log the full response
//   //         setUser(response.data); // Store the user details in the state
//   //       } else {
//   //         console.log("No token found in cookies."); // Log when no token is found
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching user details:", error); // Error handling log
//   //     }
//   //   };

//   //   fetchUserDetails();
//   // }, []);
//   // useEffect(() => {
//   //   // Function to fetch the JWT token from cookies
//   //   const getTokenFromCookies = () => {
//   //     console.log("Fetching token from cookies..."); // Debugging log
//   //     const token = document.cookie
//   //       .split("; ")
//   //       .find((row) => row.startsWith("jwt"))
//   //       ?.split("=")[1];
//   //     console.log("JWT Token:", document.cookie); // Log the token (if found)
//   //     console.log("return ", token, "returne")

//   //     return token;
//   //   };

//   //   // Function to decode the JWT token and extract user details
//   //   const getUserFromToken = (token) => {
//   //     console.log("Decoding token:", token); // Log the token before decoding
//   //     try {
//   //       const decodedToken = jwtDecode(token);
//   //       console.log("Decoded Token:", decodedToken); // Log the decoded token
//   //       return decodedToken; // Assuming the token contains user ID
//   //     } catch (error) {
//   //       console.error("Error decoding token:", error); // Error handling log
//   //     }
//   //   };

//   //   // Fetching data from the API
//   //   const fetchUserDetails = async () => {
//   //     console.log("Starting fetchUserDetails function..."); // Debugging log
//   //     try {
//   //       const token = getTokenFromCookies();
//   //       if (token) {
//   //         console.log("Token found. Proceeding with user decoding..."); // Debugging log
//   //         const userId = getUserFromToken(token);
//   //         console.log("Decoded User ID:", userId); // Log userId

//   //         // Fetching user data from the API
//   //         // const response = await axios.get("http://localhost:3001/auth/userDetails", {
//   //         //   headers: {
//   //         //     Authorization: `Bearer ${token}`,
//   //         //   },
//   //         // });
//   //         // console.log("API Response:", response); // Log the full response
//   //         // setUser(response.data); // Store the user details in the state
//   //       } else {
//   //         console.log("No token found in cookies."); // Log when no token is found
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching user details:", error); // Error handling log
//   //     }
//   //   };

//   //   fetchUserDetails();
//   // }, []);
//   useEffect(() => {
//     const getTokenFromCookies = () => {
//       const token = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('jwt'))
//         ?.split('=')[1];
//       return token;
//     };
  
//     const getUserFromToken = (token) => {
//       try {
//         const decodedToken = jwtDecode(token);
//         return decodedToken; // Assuming the token contains user ID
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     };
  
//     const fetchUserDetails = () => {
//       const token = getTokenFromCookies();
//       if (token) {
//         const decodedToken = getUserFromToken(token);
//         if (decodedToken) {
//           const userId = decodedToken.userId;
//           console.log("User ID from decoded token:", userId); // Log the userId
//           setFormData((prevData) => ({
//             ...prevData,
//             owner: userId,  // Set the userId (owner) from decoded token
//           }));
//         }
//       }
//     };
  
//     fetchUserDetails();
//   }, []);
  



//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleMenuChange = (index, e) => {
//     const updatedMenu = [...formData.menu];
//     updatedMenu[index][e.target.name] = e.target.value;
//     setFormData({ ...formData, menu: updatedMenu });
//   };

//   const addMenuItem = () => {
//     setFormData({
//       ...formData,
//       menu: [...formData.menu, { itemName: '', description: '', price: '', imageUrl: '' }],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/restaurant', formData); // Send formData with userId as owner
//       onClose();
//       // Optionally, refresh the data
//     } catch (error) {
//       console.error('Error adding restaurant:', error);
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post('http://localhost:3001/restaurant', formData);
//   //     onClose();
//   //     // Optionally, refresh the data
//   //   } catch (error) {
//   //     console.error('Error adding restaurant:', error);
//   //   }
//   // };


//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Add Restaurant</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Restaurant Name"
//             className="input mb-2"
//             onChange={handleInputChange}
//             value={formData.name}
//           />

//           <input
//             name="owner"
//             placeholder="Owner ID"
//             className="w-full p-2 mb-3 border rounded"
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             name="cuisine"
//             placeholder="Cuisine"
//             className="w-full p-2 mb-3 border rounded"
//             onChange={handleInputChange}
//           />
//           <div className="grid grid-cols-2 gap-3">
//             <input
//               name="street"
//               placeholder="Street"
//               className="p-2 border rounded"
//               onChange={handleInputChange}
//             />
//             <input
//               name="city"
//               placeholder="City"
//               className="p-2 border rounded"
//               onChange={handleInputChange}
//             />
//             <input
//               name="state"
//               placeholder="State"
//               className="p-2 border rounded"
//               onChange={handleInputChange}
//             />
//             <input
//               name="postalCode"
//               placeholder="Postal Code"
//               className="p-2 border rounded"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mt-4">
//             <h3 className="font-semibold mb-2">Menu Items</h3>
//             {formData.menu.map((item, index) => (
//               <div key={index} className="grid grid-cols-4 gap-3 mb-3">
//                 <input
//                   name="itemName"
//                   placeholder="Item Name"
//                   className="p-2 border rounded"
//                   value={item.itemName}
//                   onChange={(e) => handleMenuChange(index, e)}
//                   required
//                 />
//                 <input
//                   name="description"
//                   placeholder="Description"
//                   className="p-2 border rounded"
//                   value={item.description}
//                   onChange={(e) => handleMenuChange(index, e)}
//                 />
//                 <input
//                   name="price"
//                   placeholder="Price"
//                   type="number"
//                   className="p-2 border rounded"
//                   value={item.price}
//                   onChange={(e) => handleMenuChange(index, e)}
//                   required
//                 />
//                 <input
//                   name="imageUrl"
//                   placeholder="Image URL"
//                   className="p-2 border rounded"
//                   value={item.imageUrl}
//                   onChange={(e) => handleMenuChange(index, e)}
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               className="text-blue-500"
//               onClick={addMenuItem}
//             >
//               + Add Menu Item
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Save
//           </button>
//         </form>
//         <button
//           className="mt-2 text-red-500"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddRestaurantModal;
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
    menu: []   // Added this to hold userId (owner)
  });

  useEffect(() => {
    const getTokenFromCookies = () => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('jwt'))
        ?.split('=')[1];
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
          console.log("User ID from decoded token:", userId); // Log the userId
          setFormData((prevData) => ({
            ...prevData,
            owner: userId,  // Set the userId (owner) from decoded token
          }));
        }
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMenuChange = (index, e) => {
    const updatedMenu = [...formData.menu];
    updatedMenu[index][e.target.name] = e.target.value;
    setFormData({ ...formData, menu: updatedMenu });
  };

  const addMenuItem = () => {
    setFormData({
      ...formData,
      menu: [...formData.menu, { itemName: '', description: '', price: '', imageUrl: '' }],
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/restaurant', formData); // Send formData with userId as owner
      onClose();

      window.location.reload()
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
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
