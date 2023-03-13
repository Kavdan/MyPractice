import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducer } from "./gameSlice/gameSlice";

export const store = configureStore({
    reducer: {
        game: gameSliceReducer,
    }
})