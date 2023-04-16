import React, { useCallback, useState } from "react";
import { Restaurant } from "../types/Restaurant";
import Modal from "./Modal";
import RestaurantItem from "./RestaurantItem";

type RestaurantListProps = { restaurants: Restaurant[] };

const initRestaurantData = {
  id: 1,
  category: "한식",
  storeName: "피양콩할마니",
  distance: 20,
  detail:
    "2023년에도 어김 없이 미쉐린 가이드 서울 빕 구루망으로 선정, 어느덧 7년 째. 피양은 평양을 말하는 평안도 사투리인데요. 이북식 콩비지, 비지전골, 만두 등 맛있는 메뉴가 많답니다.",
  link: "#",
};

const RestaurantList = (props: RestaurantListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState(initRestaurantData);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <ul>
        {props.restaurants.map((restaurant) => {
          return (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              showModal={showModal}
              selectData={setRestaurantData as (data: Restaurant) => void}
            />
          );
        })}
      </ul>
      {isModalOpen && (
        <Modal restaurant={restaurantData} closeModal={closeModal} />
      )}
    </>
  );
};

export default RestaurantList;
