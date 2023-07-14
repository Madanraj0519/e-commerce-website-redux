import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice"
import productReducer from "./productSlice";
import allProductReducer from "./allProductSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";


const store = configureStore({
    reducer:{
        category: categoryReducer,
        products: productReducer,
        allProducts: allProductReducer,
        modal: modalReducer,
        cart: cartReducer,
        user: authReducer,


    }
})


export default store;