import axios from "axios";
import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import * as api from '../config'

import { rootReducers } from "./rootReducer";

const composeEnhancer = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({
        client: axios,
        api
    }))
))

export default store;