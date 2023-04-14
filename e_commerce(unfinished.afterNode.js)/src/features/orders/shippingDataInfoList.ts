import { createSlice } from "@reduxjs/toolkit";

type shippingData = {
    address: string,
    card: {
        cardNumber: string,
        cardHolderName: string,
        expiryData: string,
        cvc: string
    }
}

const initialState: Array<shippingData> = []

const shippindDataInfoListSlice = createSlice({
    name: "shippingDataInfoList",
    initialState,
    reducers: {
        addDataToList: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        }
    }
})

export const shippingDataInfoListReducer = shippindDataInfoListSlice.reducer;
export const {addDataToList} = shippindDataInfoListSlice.actions;