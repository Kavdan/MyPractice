import { createSlice, nanoid } from "@reduxjs/toolkit";

type order = {
    id: string,
    fullname: string,
    address: string,
    cardnumber: string,
}

const initialState : order = {
    id: "",
    fullname: "",
    address: "",
    cardnumber: "",
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action) : order => {
            return ({
                id: nanoid(),
                fullname: action.payload.fullname,
                address: action.payload.address,
                cardnumber: action.payload.cardNumber,
            })
        }
    }
})

export const orderReducer = orderSlice.reducer;
export const {addOrder} = orderSlice.actions;