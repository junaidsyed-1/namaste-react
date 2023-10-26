import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div
                className="res-filter"
                onClick={() => {
                    const topRatedRes = listOfRestaurants.filter(res => res.data.avgRating > 4);
                    setListOfRestaurants(topRatedRes);
                    console.log(listOfRestaurants)
                }}
            >
                <button>Top Rated Restaurants</button></div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resList={restaurant} />)}
            </div>

        </div>
    )
};

export default Body;