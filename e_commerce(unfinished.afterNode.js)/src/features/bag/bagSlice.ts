import { createSlice, current } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
        addProductToBag: (state, action) : any => {
            let newState : any = current(state);

            for (let i = 0; i < newState.length && newState.length; i++){
                let product = newState[i];
                if(product && product.id === action.payload.id){
                    product = {
                        ...product,
                        count: product.count + 1
                    }
                    newState = [...newState.slice(0, i), product, ...newState.slice(i+1, newState.length)];
                    return newState;
                }
            }

            return [
                ...state,
                action.payload
            ]
        },
        deleteProductFromBag: (state, action) => {
            return [...state].filter((product : any) => product.id !== action.payload)
        },
        discreaseCount: (state, action) => {
            let newState : any = current(state);

            for (let i = 0; i < newState.length && newState.length; i++){
                let product = newState[i];
                if(product && product.id === action.payload.id){
                    product = {
                        ...product,
                        count: product.count - 1
                    }
                    newState = [...newState.slice(0, i), product, ...newState.slice(i+1, newState.length)];
                    return newState;
                }
            }
        }
    }
})

export const bagReducer = bagSlice.reducer;
export const {deleteProductFromBag, 
              addProductToBag,
              discreaseCount} = bagSlice.actions;