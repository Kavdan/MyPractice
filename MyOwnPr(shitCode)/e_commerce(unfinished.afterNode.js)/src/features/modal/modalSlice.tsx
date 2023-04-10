import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        view: false,
        element: ""
    },
    reducers: {
        openModal: (state) : any => {
            return ({
                view: true,
                element: ""
            })
        },
        closeModal: (state) : any => {
            return ({
                view: false,
                element: "" 
            })
        }
    }
})

export const modalReducer = modalSlice.reducer;
export const {openModal, closeModal} = modalSlice.actions