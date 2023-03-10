import { API } from "./config";
import { DONATION_URL } from "./constants";

// POST donate
export const donateAPI = async (data) => {
  return await API.post(`${DONATION_URL}`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    amount: data.amount,
    cardNumber: data.cardNumber,
    message: data.message,
  });
};

// GET donation list
export const donationList = async () => {
  return await API.get(`${DONATION_URL}`);
};
