// app/admin/dashboard/[id]/RestaurantDetailsServer.jsx
import axios from 'axios';
import RestaurantDetails from "./RestaurantDetails "
export async function fetchRestaurantData(id) {
  try {
    const response = await axios.get(`https://foodapp-backend-production-7ffe.up.railway.app/restaurant/${id}`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch restaurant details');
  }
}

const RestaurantDetailsServer = async ({ params }) => {
  const { id } = await params;
  const restaurant = await fetchRestaurantData(id);

  return (
    <div>
      <RestaurantDetails restaurant={restaurant} />
    </div>
  );
};

export default RestaurantDetailsServer;
