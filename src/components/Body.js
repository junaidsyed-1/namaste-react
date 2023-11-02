import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import { REST_CARD_URL } from '../utils/constant'

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(REST_CARD_URL)
            const json = await data.json()
            const structuredData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(structuredData)
            setFilteredRestaurant(structuredData)

        } catch (error) {
            console.log(error)
        }
    }

    if (filteredRestaurant.length == 0) return <Shimmer />

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
                    filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> {<RestaurantCard resList={restaurant} />} </Link>))

                }
            </div>

        </div >
    )
};

export default Body;