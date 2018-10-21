import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';

function* requestData() { 
}

function* requestDataSuccess() {
}

function* requestDataFailure() {
}

function* weather() {
  yield takeLatest(actions.REQUEST_DATA, requestData);
  yield takeLatest(actions.REQUEST_DATA_SUCCESS, requestDataSuccess);
  yield takeLatest(actions.REQUEST_DATA_SUCCESS, requestDataFailure);
}

export default weather;