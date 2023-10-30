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
        const structuredData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(structuredData)
        console.log(structuredData)
    }

    return (
        <div className="body">
            <h1 style={{ textAlign: 'center' }}>Top Restaurants</h1>
            <div
                className="res-filter"
                onClick={() => {
                    const topRatedRes = listOfRestaurants.filter(res => res.info.avgRating > 4);
                    setListOfRestaurants(topRatedRes);
                }}
            >
                <button>Top Rated Restaurants</button></div>
            <div className="res-container">
                {
                    listOfRestaurants && listOfRestaurants.length > 0 ? ((listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resList={restaurant} />
                    ))
                    ) : (
                        <Shimmer />
                    )
                }
            </div>

        </div>
    )
};

export default Body;