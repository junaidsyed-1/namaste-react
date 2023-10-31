import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7162534&lng=77.1562594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API)
        const json = await data.json()
        const structuredData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(structuredData)
        setFilteredRestaurant(structuredData)
    }

    return (
        <div className="body">
            <h1 style={{ textAlign: 'center' }}>Top Restaurants</h1>
            <div className="res-filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button
                        onClick={() => {
                            console.log(searchText)
                            const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRes);
                        }}
                    >Search</button>
                </div>
                <button onClick={() => {
                    const topRatedRes = listOfRestaurants.filter(res => res.info.avgRating > 4);
                    setListOfRestaurants(topRatedRes);
                }}>Top Rated Restaurants</button></div>
            <div className="res-container">
                {
                    filteredRestaurant && filteredRestaurant.length > 0 ? ((filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resList={restaurant} />
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