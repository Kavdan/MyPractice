import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatId:"null",
        user: {}
    },
    reducers: {
        changeUser: (state, action) => {
            const user = action.payload.user;
            const currentUser = action.payload.currentUser;

            return {
                user,
                chatId: currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid,
            }
        },

        resetAll: (state) => {
            return {
                chatId:"null",
                user: {}
            }
        }
    }
})

export const chatReducer = chatSlice.reducer;
export const {changeUser, resetAll} = chatSlice.actions;
