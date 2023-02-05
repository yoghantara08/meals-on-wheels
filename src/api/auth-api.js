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
  return await axios.post(`${AUTH_URL}/register`, {
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    age: formData.get("age"),
    address: formData.get("address"),
    phoneNumber: formData.get("phoneNumber"),
    image: formData.get("image"),
  });
};

// Register Partner
export const partnerRegister = async (formData) => {
  return await axios.post(`${AUTH_URL}/partnership`, {
    email: formData.get("email"),
    password: formData.get("password"),
    companyName: formData.get("companyName"),
    address: formData.get("address"),
    phoneNumber: formData.get("phoneNumber"),
    image: formData.get("image"),
  });
};
