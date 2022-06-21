import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};
const getAllCargories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};
const getFilterCategory = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};
export { getMealById, getAllCargories, getFilterCategory };
