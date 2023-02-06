import { AUTH_URL } from "./constants";
import axios from "axios";

// Login
export const loginAPI = async (email, password) => {
  return await axios.post(`${AUTH_URL}/login`, {
    email: email,
    password: password,
  });
};

// Register MEMBER & RIDER
export const userRegister = async (formData) => {
  return await axios.post(`${AUTH_URL}/register`, formData);
};

// Register Partner
export const partnerRegister = async (formData) => {
  return await axios.post(`${AUTH_URL}/partnership`, formData);
};
