import { API } from "./config";
import { PARTNER_URL } from "./constants";

// GET all assigned order by admin
export const getAssignedOrder = async (token, partnerId) => {
  return await API.get(`${PARTNER_URL}/order/${partnerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT accept order and prepare meal
export const prepareMeal = async (token, partnerId, orderId) => {
  return await API.put(`${PARTNER_URL}/order/${partnerId}/${orderId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT finish preparing and ready to deliver
export const finishPrepareMeal = async (token, partnerId, orderId) => {
  return await API.put(
    `${PARTNER_URL}/order-ready/${partnerId}/${orderId}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
