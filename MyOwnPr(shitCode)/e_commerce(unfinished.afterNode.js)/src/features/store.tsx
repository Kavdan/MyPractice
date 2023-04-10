import { configureStore } from "@reduxjs/toolkit";
import { productsReduce } from "./productsSlice/productSlice";
import { bagReducer } from "./bagSlice/bagSlice";
import { modalReducer } from "./modal/modalSlice";
import { shippingDataReducer } from "./shippingData/shippingDataSlice";


export const store = configureStore({
    reducer: {
        products: productsReduce,
        bag: bagReducer,
        modal: modalReducer,
        shippingData: shippingDataReducer
    }
})