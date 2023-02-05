import axios from "axios";
import { ADMIN_URL } from "./constants";

// USERS MANAGEMENT ==================================
// GET all users (member/rider/volunteer)
export const getUsers = async (token) => {
  return axios.get(`${ADMIN_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET rider/volunteer pending
export const getPendingUsers = async (token) => {
  return axios.get(`${ADMIN_URL}/users/pending`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT accept rider/volunteer
export const acceptUsers = async (token, userId) => {
  return axios.put(`${ADMIN_URL}/accept-user/${userId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PARTNERSHIP ==================================
// GET all partners
export const getPartners = async (token) => {
  return axios.get(`${ADMIN_URL}/partners`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET partners pending
export const getPendingPartners = async (token) => {
  return axios.get(`${ADMIN_URL}/partners/pending`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT accept partner
export const acceptPartners = async (token, partnerId) => {
  return axios.put(`${ADMIN_URL}/accept-partner/${partnerId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// MEAL ==================================
// GET all meal
export const getMeals = async (token) => {
  return axios.get(`${ADMIN_URL}/meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// POST meal menu
export const addMeal = async (token, mealFormData) => {
  return axios.post(`${ADMIN_URL}/meal/add`, mealFormData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT edit meal
export const editMeal = async (token, mealFormData, mealId) => {
  return axios.put(`${ADMIN_URL}/meal/edit/${mealId}`, mealFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

// DELETE meal
export const deleteMeal = async (token, mealId) => {
  return axios.delete(`${ADMIN_URL}/meal/delete/${mealId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ORDER ==================================
// GET all on progress order
export const getOrderOnProgress = async (token) => {
  return axios.get(`${ADMIN_URL}/order-on-progress`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET all completed order
export const getOrderComplete = async (token) => {
  return axios.get(`${ADMIN_URL}/order-complete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUT assign order to partner
export const assignOrderToPartner = async (token, orderId, partnerId) => {
  return axios.put(
    `${ADMIN_URL}/assign-to-partner/${orderId}/${partnerId}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

// PUT assigned meal to rider
export const assignOrderToRider = async (token, orderId, riderId) => {
  return axios.put(`${ADMIN_URL}/assign-to-rider/${orderId}/${riderId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
