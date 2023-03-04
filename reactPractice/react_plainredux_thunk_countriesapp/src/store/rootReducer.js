import { combineReducers } from "redux";
import { controlReducer } from "./controls/controlsReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { detailsReducer } from "./details/detailsReducers";
import { themeReducer } from "./theme/themeReducer";

export const rootReducers = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlReducer,
    details: detailsReducer
}); 