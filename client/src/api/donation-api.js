import axios from "axios";
import { DONATION_URL } from "./constants";

// POST donate
export const donateAPI = async (data) => {
  return await axios.post(`${DONATION_URL}`, {
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
  return await axios.get(`${DONATION_URL}`);
};
