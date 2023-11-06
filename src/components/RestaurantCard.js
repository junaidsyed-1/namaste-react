import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { resList } = props;
    const { info } = resList;
    const { cuisines, name, sla, avgRating, cloudinaryImageId } = info;

    return (
        <div className="p-4 w-56 bg-slate-100 h-full m-4 hover:bg-slate-300 transition-all">
            <img className="w-full rounded-xl h-48" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold my-2 text-lg">{name}</h3>
            <h4 className="">{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Deliver Time: {sla.deliveryTime} MINS</h4>
        </div>
    )
};

export default RestaurantCard;