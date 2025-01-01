// // EditMenuModal.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const EditMenuModal = ({ restaurant, onClose, onUpdate }) => {
//   const [menuItems, setMenuItems] = useState(restaurant.menu || []);
//   const [updatedMenu, setUpdatedMenu] = useState([]);

//   useEffect(() => {
//     // Load the current menu when the modal is opened
//     setUpdatedMenu(menuItems);
//   }, [restaurant, menuItems]);
// console.log(restaurant, "rest")
//   const handleInputChange = (index, event) => {
//     const updatedMenuItems = [...updatedMenu];
//     updatedMenuItems[index][event.target.name] = event.target.value;
//     setUpdatedMenu(updatedMenuItems);
//   };

//   const handleAddItem = () => {
//     setUpdatedMenu([
//       ...updatedMenu,
//       { name: '', description: '', price: '' },
//     ]);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(
//         `https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${restaurant._id}/${restaurant.menu.[i]._id }`,
//         { menu: updatedMenu }
//       );
//       Swal.fire('Success', 'Menu updated successfully', 'success');
//       onUpdate();
//       onClose();
//     } catch (err) {
//       Swal.fire('Error', 'Failed to update menu', 'error');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedMenuItems = updatedMenu.filter((_, i) => i !== index);
//     setUpdatedMenu(updatedMenuItems);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Edit Menu for {restaurant.name}</h2>
//           <button
//             onClick={onClose}
//             className="text-xl font-bold text-gray-600 hover:text-gray-800"
//           >
//             X
//           </button>
//         </div>

//         <div>
//           <h3 className="text-lg font-medium mb-2">Menu Items</h3>
//           {updatedMenu.map((item, index) => (
//             <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
//               <input
//                 type="text"
//                 name="name"
//                 value={item.name}
//                 onChange={(e) => handleInputChange(index, e)}
//                 placeholder="Item Name"
//                 className="w-full p-2 mb-2 border rounded-md"
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={item.description}
//                 onChange={(e) => handleInputChange(index, e)}
//                 placeholder="Item Description"
//                 className="w-full p-2 mb-2 border rounded-md"
//               />
//               <input
//                 type="number"
//                 name="price"
//                 value={item.price}
//                 onChange={(e) => handleInputChange(index, e)}
//                 placeholder="Item Price"
//                 className="w-full p-2 mb-2 border rounded-md"
//               />
//               <button
//                 onClick={() => handleDeleteItem(index)}
//                 className="mt-2 text-red-500 hover:text-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}

//           <button
//             onClick={handleAddItem}
//             className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full mb-4"
//           >
//             Add Item
//           </button>
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
//           >
//             Save Menu
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditMenuModal;
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditMenuModal = ({ restaurant, onClose, onUpdate }) => {
  const [menuItems, setMenuItems] = useState(restaurant.menu || []);
  const [updatedMenu, setUpdatedMenu] = useState([]);

  useEffect(() => {
    // Load the current menu when the modal is opened
    setUpdatedMenu(menuItems);
  }, [restaurant, menuItems]);

  const handleInputChange = (index, event) => {
    const updatedMenuItems = [...updatedMenu];
    updatedMenuItems[index][event.target.name] = event.target.value;
    setUpdatedMenu(updatedMenuItems);
  };

  const handleAddItem = () => {
    setUpdatedMenu([
      ...updatedMenu,
      { name: '', description: '', price: '' },
    ]);
  };

  const handleSave = async () => {
    try {
      // Loop through each menu item and send the update for each one
      for (let i = 0; i < updatedMenu.length; i++) {
        const menuItemId = updatedMenu[i]._id; // Get the menu item ID from the updated list
        const response = await axios.put(
          `https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${restaurant._id}/menu/${menuItemId}`,  // Assuming menu items have unique _id
          updatedMenu[i]  // Send the updated item data
        );
      }

      Swal.fire('Success', 'Menu updated successfully', 'success');
      onUpdate();
      onClose();
    } catch (err) {
      Swal.fire('Error', 'Failed to update menu', 'error');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedMenuItems = updatedMenu.filter((_, i) => i !== index);
    setUpdatedMenu(updatedMenuItems);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Menu for {restaurant.name}</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-600 hover:text-gray-800"
          >
            X
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Menu Items</h3>
          {updatedMenu.map((item, index) => (
            <div key={item._id || index} className="mb-4 p-4 border rounded-lg shadow-sm">
                {console.log(item)}
              <input
                type="text"
                name="name"
                value={item.itemName}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Item Name"
                className="w-full p-2 mb-2 border rounded-md"
              />
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Item Description"
                className="w-full p-2 mb-2 border rounded-md"
              />
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Item Price"
                className="w-full p-2 mb-2 border rounded-md"
              />
              <input
                type="text"
                name="imageUrl"
                value={item.imageUrl}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Image Url"
                className="w-full p-2 mb-2 border rounded-md"
              />
              <button
                onClick={() => handleDeleteItem(index)}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full mb-4"
          >
            Add Item
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Save Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMenuModal;
