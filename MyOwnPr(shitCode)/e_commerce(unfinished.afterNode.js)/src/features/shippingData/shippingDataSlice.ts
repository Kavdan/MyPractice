import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    adress: "",
    orders: []
}

const shippingDataSlice = createSlice({
    name: 'shippingData',
    initialState,
    reducers: {
        addData: (state, action) => {
            return {
                ...action.payload,
                orders: [...state.orders]
            }
        }
    }
})

export const shippingDataReducer = shippingDataSlice.reducer;
export const {addData} = shippingDataSlice.actions
