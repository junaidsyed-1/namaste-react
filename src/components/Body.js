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
        <div className="box-border mx-auto p-4 my-2">
            <h1 className="text-center l text-3xl font-bold p-4">Top Restaurants</h1>
            <div className="px-4 my-2">
                <div className="search">
                    <input className="border-2 border-solid border-black rounded-xl px-3" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="bg-red-300 px-4 mx-4 py-1 hover:bg-red-600 transition-all shadow-lg"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRes)
                        }}
                    >Search</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">

                {
                    filteredRestaurant.map((restaurant) => (<div className="my-4"> <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> {<RestaurantCard resList={restaurant} />} </Link></div>))

                }
            </div>

        </div >
    )
};

export default Body;