import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILED } from '../actions/types'
import fetchApi from '../api/api';

function* fetchServices(){
    try {
        const services = yield call(fetchApi)
        yield put({type: FETCH_SERVICES_SUCCESS, payload: services})
    }catch(error){
        yield put({type: FETCH_SERVICES_FAILED, payload: error.message})
    }
}

function* servicesSaga(){
    yield takeLatest(FETCH_SERVICES_REQUEST, fetchServices)
}

export default servicesSaga;



