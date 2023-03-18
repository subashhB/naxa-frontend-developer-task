import { combineReducers } from "redux";
import servicesReducer from "./servicesReducers";

const reducers = combineReducers({
    services: servicesReducer
})

export default reducers;