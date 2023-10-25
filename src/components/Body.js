import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resList={restaurant} />)}
            </div>

        </div>
    )
};

export default Body;