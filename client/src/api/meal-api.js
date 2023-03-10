import axios from "axios";
import { MEALS_URL } from "./constants";

// Get all meals
export const listMeals = async () => {
  return await axios.get(`${MEALS_URL}`);
};

// Get meal details
export const getMealDetails = async (mealId) => {
  return await axios.get(`${MEALS_URL}/${mealId}`);
};

// Search meal
export const searchMeal = async (query) => {
  return await axios.get(`${MEALS_URL}/search`, {
    params: { meal: query },
  });
};
