import { CATEGORIES, SORT_BY } from "../constants/constants";

type Restaurant = {
  id: number;
  category: Category;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
};

type Category = typeof CATEGORIES[number];

type SortBy = typeof SORT_BY[number];

type RestaurantJSON = {
  id: number;
  category: string;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
};

export type { Restaurant, Category, SortBy, RestaurantJSON };
