import { createSlice, nanoid } from "@reduxjs/toolkit";

type order = {
    id: string,
    fullname: string,
    address: string,
    amount: string,
    cardnumber: string,
}

const initialState : Array<order> = [];

const orderSlice = createSlice({
    name: 'shippingData',
    initialState,
    reducers: {
        addOrderInHistory: (state, action) : Array<order> => {
            return [
              ...state,
              {
                id: nanoid(),
                fullname: action.payload.fullname,
                address: action.payload.address,
                amount: action.payload.amount,
                cardnumber: action.payload.cardNumber,
              },
            ];
        }
    }
})

export const ordersReducer = orderSlice.reducer;
export const {addOrderInHistory} = orderSlice.actions
