import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import booksSliceReducer from "../features/auth/booksSlice";
import cartsSliceReducer from "../features/auth/cartsSlice";
import checkoutSliceReducer from "../features/auth/checkoutSlice";
import favouritesSliceReducer from "../features/auth/favouritesSlice";
import ordersSliceReducer from "../features/auth/ordersSlice";
import tagsSliceReducer from "../features/auth/tagsSlice";
import userSliceReducer from "../features/auth/userSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        books: booksSliceReducer,
        carts: cartsSliceReducer,
        checkout: checkoutSliceReducer,
        favourites: favouritesSliceReducer,
        orders: ordersSliceReducer,
        tags: tagsSliceReducer,
        user: userSliceReducer,
        
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
