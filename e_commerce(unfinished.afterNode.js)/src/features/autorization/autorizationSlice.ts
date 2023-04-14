import { createSlice, nanoid } from "@reduxjs/toolkit";

type userData = {
    id: string,
    fullname: string,
    address: string,
    email: string,
    password: string
}

const initialState : Array<userData> = []

const userSlice = createSlice({
    name: "autorization",
    initialState,
    reducers: {
        signUp: (state, action) : Array<userData> => {
            return [
                ...state,
                {
                    id: nanoid(),
                    fullname: action.payload.fullname,
                    address: action.payload.address,
                    email: action.payload.email,
                    password: action.payload.password
                }
            ]
        }
    }
})

export const userReducer = userSlice.reducer;
export const {signUp} = userSlice.actions;
