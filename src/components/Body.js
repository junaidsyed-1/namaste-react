import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } = useBody();

    if (filteredRestaurant === null) { return <Shimmer /> }

    if (onlineStatus === false) return <h1>It looks like you'r offline</h1>

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
                            setFilteredRestaurant(filteredRes)
                        }}
                    >Search</button>
                </div>
            </div>
            <div className="res-container">

                {
                    filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> {<RestaurantCard resList={restaurant} />} </Link>))

                }
            </div>

        </div >
    )
};

export default Body;