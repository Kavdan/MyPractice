import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const authUserSlice = createSlice({
    name: "currentUser",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        }
    }
})

export const authUserReducer = authUserSlice.reducer;
export const {setUser} = authUserSlice.actions;
export const currentUserGet = () => useSelector((state: any) => JSON.parse(state.currentUser));