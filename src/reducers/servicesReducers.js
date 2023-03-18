import { FETCH_SERVICES_FAILED, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    services: [],
    error: null
}

const servicesReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SERVICES_REQUEST:
            return {...state, loading: true}
        case FETCH_SERVICES_SUCCESS:
            return {...state, services: action.payload, loading: false, error: null}
        case FETCH_SERVICES_FAILED:
            return {...state, error: action.payload, loading: false}
        default: 
            return state
    }
}

export default servicesReducer