import { CDN_URL } from "../utils/constant"
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { resList } = props;
    const { info } = resList;
    const { cuisines, name, sla, avgRating, cloudinaryImageId } = info;

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="p-4 m-4 w-56 bg-slate-100  hover:bg-slate-300 transition-all h-fit" >
            <img className="w-full rounded-xl h-48" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold my-2 text-lg">{name}</h3>
            <h4 className="">{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Deliver Time: {sla.deliveryTime} MINS</h4>
            <span>User: {loggedInUser}</span>
        </div>
    )
};

// Higher Order Function

export const isOpenNow = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white text-xs p-2 mx-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }

}

export default RestaurantCard;