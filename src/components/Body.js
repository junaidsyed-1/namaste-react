import RestaurantCard, { isOpenNow } from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    // const { loggedInUser, setUserName } = useContext(UserContext);

    const RestaurantCardOpen = isOpenNow(RestaurantCard)

    const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } = useBody();

    if (filteredRestaurant === null || filteredRestaurant === undefined || filteredRestaurant.length === 0) return <Shimmer />

    if (onlineStatus === false) return <h1>It looks like you'r offline</h1>

    return (
        <div className="box-border mx-auto p-4 my-2 w-full container ">
            <h1 className="text-center text-3xl font-bold p-4">Top Restaurants</h1>

            <div className="container mx-auto grid grid-col-3 px-20">
                <div className="search lg:flex grid gap-3 ">
                    <input
                        data-testid="seachInput"
                        className="border-2 border-solid border-black rounded-xl px-3" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="lg:flexx bg-yellow-200 rounded-lg px-4 mx-4 py-1 hover:bg-[#FFA000] hover:text-white transition-all shadow-lg"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRes)
                        }}
                    >Search</button>

                    <button className="bg-yellow-200 rounded-lg px-4 mx-4 p-2 hover:bg-[#FFA000] hover:text-white transition-all shadow-lg"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                            setFilteredRestaurant(filteredRes)
                        }}
                    >Top Rated Restaurants</button>

                    {/* <div className="ml-20">User Name: <input type="text" className="border border-black px-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} /></div> */}
                </div>
            </div>
            <div className="container mx-auto px-10">
                <div className="grid items-start lg:grid-cols-4 px-10">

                    {
                        filteredRestaurant.map((restaurant) => (
                            <div className="my-4" key={restaurant.info.id}> <Link to={"/restaurant/" + restaurant.info.id}> {
                                restaurant.info.isOpen ?
                                    <RestaurantCardOpen resList={restaurant} /> :
                                    <RestaurantCard resList={restaurant} />
                            }
                            </Link></div>))

                    }
                </div>
            </div>

        </div >
    )
};

export default Body;