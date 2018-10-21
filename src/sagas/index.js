import { all } from 'redux-saga/effects';
import weatherRequests from './weather.js';

export default function* rootSaga() {
  yield all([weatherRequests()]);
}
