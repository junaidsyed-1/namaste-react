import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constant';
import { addItem, removeItem } from '../utils/cartSlice'

const ItemList = ({ items, action }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }
    const handleRemoveItem = (item) => {
        // Dispatch an action
        dispatch(removeItem());
    }

    return (
        <div>
            {items.map(item => (<div key={item.card.info.id}>
                <div className="my-2 py-5 border-b border-gray-300">
                    <div className="flex justify-between items-center">
                        <div className="grid gap-1">
                            <span className="font-semibold text-lg">{item.card.info.name}</span>
                            <span className="font-semibold text-sm">₹{item.card.info.price / 100}</span>
                        </div>
                        <div className="">
                            {action ?
                                <button
                                    onClick={() => handleRemoveItem(item)}
                                    className='absolute bg-slate-600 text-sm p-2 px-2 text-white rounded-lg mx-12 hover:shadow-lg hover:transition-all'>
                                    Remove</button> :
                                <button
                                    onClick={() => handleAddItem(item)}
                                    className='absolute bg-slate-600 text-sm p-2 px-2 text-white rounded-lg mx-12 hover:shadow-lg hover:transition-all'>
                                    Add +</button>
                            }
                            <img src={CDN_URL + item.card.info.imageId} alt="Image" className="rounded-lg w-40" />
                        </div>
                    </div>
                </div>
            </div>))
            }
        </div >
    )
};

export default ItemList;