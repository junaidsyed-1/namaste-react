import { CDN_URL } from '../utils/constant'

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map(item => (<div key={item.card.info.id}>
                <div className="my-2 py-5 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <div className="grid gap-1">
                            <span className="font-semibold text-lg">{item.card.info.name}</span>
                            <span className="font-semibold text-sm">₹{item.card.info.price / 100}</span>
                        </div>
                        <div className="w-20">
                            <img src={CDN_URL + item.card.info.imageId} alt="Image" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    )
};

export default ItemList;