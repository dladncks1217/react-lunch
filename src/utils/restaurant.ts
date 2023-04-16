import { Restaurant } from "../types/Restaurant";
import mockData from "../mockData.json";
import { LOCALSTORAGE_KEY_RESTAURANT } from "../constants/constants";

export const filterByCategory = (
  restaurants: Restaurant[],
  category: string
) => {
  if (category === "전체") return restaurants;

  return restaurants.filter((r) => r.category === category);
};

export const sortBy = (restaurants: Restaurant[], sort: string) => {
  if (sort === "이름순") {
    return restaurants.sort((a, b) => a.storeName.localeCompare(b.storeName));
  }
  return restaurants.sort((a, b) => a.distance - b.distance);
};

export const getRestaurants = () => {
  const storageRestaurants = localStorage.getItem(LOCALSTORAGE_KEY_RESTAURANT);
  if (storageRestaurants) return JSON.parse(storageRestaurants);

  const { restaurants } = mockData as { restaurants: Restaurant[] };
  localStorage.setItem(
    LOCALSTORAGE_KEY_RESTAURANT,
    JSON.stringify(restaurants)
  );

  return restaurants;
};
