import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers : {
        addAll: (state, action) => {
            return action.payload;
        },
        addProduct: (state : any, action: any) : any => {
            return [
                ...state,
                action.payload
            ]
        }
    }
}) 

export const productsReduce = productsSlice.reducer;
export const {addAll, addProduct} = productsSlice.actions;
