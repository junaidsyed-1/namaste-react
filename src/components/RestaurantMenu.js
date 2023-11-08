import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from 'react';

const RestaurantMenu = () => {

    const restId = useParams();

    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(restId?.id)

    if (resInfo === null || 0) return <Shimmer />

    const { name, cuisines } = resInfo.cards[0].card.card.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories[0].card.card);

    return (
        <>
            <div className="py-4 my-4 w-6/12 mx-auto">
                <div className="mb-3 p-3">
                    <h3 className="font-extrabold text-xl">{name}</h3>
                    <span className="text-gray-400/100 text-sm">{cuisines.join(", ")}</span>
                </div>
                {categories.map((itemCards, index) =>
                    <RestaurantCategory
                        key={itemCards.card.card.title}
                        data={itemCards?.card?.card}
                        showItem={index === showIndex}
                        setShowIndex={() => setShowIndex(index)}
                        hideItem={() => setShowIndex(false)}
                        index={index}
                    />)}
            </div>
        </>
    );
};

export default RestaurantMenu;