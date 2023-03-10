import { API } from "./config";
import { RIDER_URL } from "./constants";

// GET all assigned order by admin
export const assignedOrderToDeliver = async (token, riderId) => {
  return await API.get(`${RIDER_URL}/order/${riderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT accept order and deliver meal
export const deliverOrder = async (token, riderId, orderId) => {
  return await API.put(`${RIDER_URL}/order/${riderId}/${orderId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT finish deliver meal
export const orderDelivered = async (token, riderId, orderId) => {
  return await API.put(
    `${RIDER_URL}/order-delivered/${riderId}/${orderId}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
