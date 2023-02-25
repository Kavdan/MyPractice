import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Dude Dubovski"},
    {id: 2, name: "Neil Still"},
    {id: 3, name: "Husein Abu Adan"}
];

const usersSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {

    }
})

export const selectedAllUsers = state => state.users;
export default usersSlice.reducer;