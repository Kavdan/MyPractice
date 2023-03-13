import { createSlice } from "@reduxjs/toolkit";
import { whosWin } from "../../utils/who'sWin";

const initialState = {
    userScore: 0,
    AIScore: 0
}

const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {
        checkGame: (state, {payload}) => {
            const {userImg, AiImg} = payload;
            whosWin(userImg, AiImg, state);
        }
    }
})

export const {checkGame} = gameSlice.actions;
export const gameSliceReducer = gameSlice.reducer;