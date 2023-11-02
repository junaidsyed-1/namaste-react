import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const param = useParams();
    const restId = param.id

    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + restId);
        const json = await data.json();
        setResInfo(json?.data)
    };

    if (resInfo === null || 0) return <Shimmer />

    const { name, cuisines } = resInfo.cards[0].card.card.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards;


    return (
        <div className="restaurant-menu-container">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h3>Recommended</h3>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs.{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        </li>))
                }
            </ul>
        </div >
    );
};

export default RestaurantMenu;