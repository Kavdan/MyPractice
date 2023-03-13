import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const fileSlice = createSlice({
    name: "@@fileDownloader/fetchUrl",
    initialState,
    reducers: {
        saveUrl: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {saveUrl} = fileSlice.actions;
export const fileSliceReducer = fileSlice.reducer;