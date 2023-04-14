import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openModal } from "../modal/modalSlice";
import { closeModal } from "../modal/modalSlice";

export const getProduct = createAsyncThunk(
  "currentProduct",
  async (id : string = "1", {dispatch}) : Promise<any> => {
      dispatch(openModal());
      const res = await fetch("https://dummyjson.com/products/"+id);
      const data = await res.json();
      dispatch(setProduct(data))
      dispatch(closeModal())
  }
);

const currentProductSlice = createSlice({
    name: "currentProduct", 
    initialState: "",
    reducers: {
        setProduct: (state, action) => {
            return action.payload;
        }
    }
})

const {setProduct} = currentProductSlice.actions;
export const currentProductReducer = currentProductSlice.reducer;
