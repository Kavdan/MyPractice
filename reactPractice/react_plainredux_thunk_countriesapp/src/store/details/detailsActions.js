export const SET_DETAILS = "@@details/SET_DETAILS";
export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS";

export const clearDetails = () => ({
    type: CLEAR_DETAILS
}) 

export const setDetails = (currentCountry) => ({
    type: SET_DETAILS,
    payload: currentCountry
})

export const setLoading = () => ({
    type: SET_LOADING
})

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

export const setNeighbors = (neighbors) => {
    return {
        type: SET_NEIGHBORS,
        payload: neighbors
    }
}