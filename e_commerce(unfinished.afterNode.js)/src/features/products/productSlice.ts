import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
    "productsThunk",
    async(title, {dispatch}) => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json()
        dispatch(addAll(data.products))
    }
)

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
