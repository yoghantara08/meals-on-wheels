import axios from "axios";
import { MEMBER_URL } from "./constants";

// POST order meal :mealId
export const orderMeal = async (token, mealId, memberId) => {
  return await axios.post(`${MEMBER_URL}/order/${mealId}/${memberId}`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET list on order meal :status on progress
export const orderOnProgressMember = async (token, memberId) => {
  return await axios.get(`${MEMBER_URL}/order/${memberId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET all complete ordered meals :status = "MEAL DELIVERED"
export const orderCompleteMember = async (token, memberId) => {
  return await axios.get(`${MEMBER_URL}/order-complete/${memberId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
