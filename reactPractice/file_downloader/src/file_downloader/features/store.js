import { configureStore } from "@reduxjs/toolkit";
import { fileSliceReducer, saveUrl } from "./fileSlice";

const store = configureStore({
    reducer: {
        fetchUrl: fileSliceReducer
    }
})

export default store;
export const getUrls = (state) => state.fetchUrl