import { all } from 'redux-saga/effects'
import servicesSaga from './servicesSaga'

function* rootSaga(){
    yield all([
        servicesSaga(),
    ])
}

export default rootSaga