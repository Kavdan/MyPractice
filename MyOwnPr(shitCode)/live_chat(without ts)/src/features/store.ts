import { configureStore } from "@reduxjs/toolkit"
import { authUserReducer } from "./AuthUserSlice/authUserSlice"
import { chatReducer } from "./ChatsSlicer/chatSlice"


export const store = configureStore({
    reducer: {
      currentUser: authUserReducer,
      chat: chatReducer
    }
})

export default store;