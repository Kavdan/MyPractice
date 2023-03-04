import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countriesActions"

const initialState = {
    status: "idle",
    error: null,
    list: []
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_COUNTRIES:
            return {
                status: "received",
                error: null,
                list: payload
            }
        case SET_LOADING: 
            return {
                ...state,
                status: "loading",
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: "Error",
                error: payload
            }
        default: return state;
    }
}
