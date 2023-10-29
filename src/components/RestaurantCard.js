import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { resList } = props;
    const { info } = resList;
    const { cuisines, name, deliveryTime, avgRating, cloudinaryImageId } = info;

    return (
        <div className="res-card">
            <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Deliver Time: {deliveryTime} MINS</h4>
        </div>
    )
};

export default RestaurantCard;