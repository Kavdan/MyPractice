import { createSlice } from "@reduxjs/toolkit";

type shippingData = {
  address: { shippingName : string,
     streetName: string,  city: string,  country: string };
  card: {
    cardNumber: string;
    cardHolderName: string;
    expiryData: string;
    cvc: string;
  };
};

const initialState: shippingData = {
    address: {
        shippingName: "",
            streetName: "",
            city: "",
            country: "",
    },
    card: {
        cardNumber: "",
        cardHolderName: "",
        expiryData: "",
        cvc: ""
    }
}

const currentShippingDataSlice = createSlice({
    name: "shippingDataInfoList",
    initialState,
    reducers: {
        addPayment: (state, action) => {
            return {
                ...state,
                card: action.payload
            }
        }, 
        addAddress: (state, action) => {
            return {
                ...state,
                address: action.payload
            }
        }
    }
})

export const currentShippingDataReducer = currentShippingDataSlice.reducer;
export const {addPayment, addAddress} = currentShippingDataSlice.actions;