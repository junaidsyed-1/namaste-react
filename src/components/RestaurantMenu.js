import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const restId = useParams();

    const resInfo = useRestaurantMenu(restId?.id)

    if (resInfo === null || 0) return <Shimmer />

    const { name, cuisines } = resInfo.cards[0].card.card.info;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0].card.card.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card.itemCards;


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