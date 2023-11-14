import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.item)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="p-4 m-4 w-6/12 mx-auto">
            <h1 className="text-2xl font-bold">Cart Items</h1>
            {cartItems.length === 0 ? '' : <button
                onClick={handleClearCart}
                className="p-2 m-2  rounded-lg bg-slate-600 text-white">Clear Cart</button>
            }
            <div>
                {cartItems.length === 0 && <h1 className="text-lg font-bold py-2 text-center">Cart is Empty..</h1>}
                <ItemList items={cartItems} action={true} />
            </div>
        </div>
    )
};

export default Cart;