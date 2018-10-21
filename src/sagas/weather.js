import { call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import * as actions from '../actions';

const APP_ID = '47c8b6e9c893eb46945e9e888b158062';

function* requestData({ payload }) {
  const { latitude, longitude } = payload || {};

  const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${APP_ID}`;
  const getDataByCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`;

  let location = typeof(payload) === "object" ? getDataByCoords : getDataByCity;
  try {

    const response = yield call(axios.get, location);
    yield put({type: actions.REQUEST_DATA_SUCCESS, payload: response.data});
  } catch(err) {
    put({type: actions.REQUEST_DATA_FAILURE, payload: err}); 
  } 
}

function* weather() {
  yield takeLatest(actions.REQUEST_DATA, requestData);
}

export default weather;