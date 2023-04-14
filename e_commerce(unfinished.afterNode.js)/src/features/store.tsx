import { configureStore } from "@reduxjs/toolkit";
import { productsReduce } from "./products/productSlice";
import { bagReducer } from "./bag/bagSlice";
import { modalReducer } from "./modal/modalSlice";
import { ordersReducer} from "./orders/ordersSlice";
import { orderReducer } from "./orders/orderSlice";
import { currentProductReducer } from "./products/currentProductSlice";
import { shippingDataInfoListReducer } from "./orders/shippingDataInfoList";
import { currentShippingDataReducer } from "./orders/currentShippingData";


export const store = configureStore({
    reducer: {
        products: productsReduce,
        bag: bagReducer,
        modal: modalReducer,
        order: orderReducer,
        orders: ordersReducer,
        currentProduct: currentProductReducer,
        shippingDataInfo: shippingDataInfoListReducer,
        currentShippingData: currentShippingDataReducer
    }
})