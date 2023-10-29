import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7162534&lng=77.1562594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const structuredData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(structuredData)
    }

    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <h1 style={{ textAlign: 'center' }}>Top Restaurants</h1>
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
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resList={restaurant} />)}
            </div>

        </div>
    )
};

export default Body;