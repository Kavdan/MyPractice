import { CLEAR_DETAILS, setDetails, setError, setLoading, setNeighbors, SET_DETAILS, SET_ERROR, SET_LOADING, SET_NEIGHBORS } from "./detailsActions"

const initialState = {
    currentCountry: "",
    status: "",
    error: null,
    neighbors: []
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_DETAILS:
            return {
                ...state,
                status: "received",
                currentCountry: payload
            }
        case SET_ERROR:
            return {
                ...state,
                status: "rejected",
                error: payload
            }
        case SET_LOADING: 
            return {
                ...state,
                error: null,
                status: "loading",
            }
        case CLEAR_DETAILS:
            return initialState;
        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload
            }
        default: return state;
    }
}

export const loadingCountry = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading());
    client.get(api.searchByCountry(name))
            .then(({data}) => dispatch(setDetails(data[0])))
            .catch(err => dispatch(setError(err.message)))
}

export const loadingNeighborsByCountry = (countries) => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(countries))
        .then(({data}) => dispatch(setNeighbors(data.map(c => c.name))))
        .catch(err => dispatch(setError(err.message)))
}