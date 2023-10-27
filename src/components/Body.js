import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    // [] this is destructring on the fly
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    // We can also do this:
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    // This is just normal JS, nothing new

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