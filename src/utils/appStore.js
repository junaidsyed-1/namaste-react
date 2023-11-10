import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const appStore = configureStore({
    reducer: {
        cart: cartSlice, // cart slice reducer
    },
});

export default appStore;