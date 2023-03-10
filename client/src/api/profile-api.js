import axios from "axios";
import { PROFILE_URL } from "./constants";

// Get profile details
export const getProfile = async (token) => {
  return await axios.get(`${PROFILE_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
