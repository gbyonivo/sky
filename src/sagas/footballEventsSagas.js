import { call, put, all } from 'redux-saga/effects';
import { fetchFootballEventsFromApi } from '../api/apiService';
import {
  finishedFetchingFootballEvents,
  errorFetchingFootballEvents,
  // selectFootballEvent,
  // togglePriceFormat
} from '../actions';
// import {
//   SELECT_EVENT,
//   TOGGLE_PRICE_FORMAT
// } from '../constants/actionTypes';

export function* fetchFootballEventsSaga() { // eslint-disable-line
  try {
    const data = yield call(fetchFootballEventsFromApi);
    yield put(finishedFetchingFootballEvents(data.events, data.markets, data.outcomes));
  } catch (error) {
    yield put(errorFetchingFootballEvents(error));
  }
}

// export function* selectFootballEventSaga(c) {
//   console.log('benz', c);
//   yield put(selectFootballEvent(c));
// }

// export function* togglePriceFormatSaga() {
//   yield takeEvery(TOGGLE_PRICE_FORMAT, togglePriceFormat);
// }

export function* sagas() {
  yield all([
    call(fetchFootballEventsSaga),
    // takeEvery(SELECT_EVENT, selectFootballEventSaga),
  ]);
}

export default sagas;