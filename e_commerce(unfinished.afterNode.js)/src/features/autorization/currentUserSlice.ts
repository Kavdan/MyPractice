import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: string,
    email: string,
    password: string
};

const initialState : any = null;

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrUser: (state, action) : User => {
            return action.payload;
        },
        logOut: (state, action) => {
            return null
        }
    }
})

export const currentUserReducer = currentUserSlice.reducer;
export const {setCurrUser, 
              logOut} = currentUserSlice.actions;