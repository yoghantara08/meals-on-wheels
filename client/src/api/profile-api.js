import { API } from "./config";
import { PROFILE_URL } from "./constants";

// Get profile details
export const getProfile = async (token) => {
  return await API.get(`${PROFILE_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
