import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchFootballEventsFromApi } from '../api/apiService';
import { finishedFetchingFootballEvents, errorFetchingFootballEvents, selectFootballEvent } from '../actions';
import { SELECT_EVENT } from '../constants/actionTypes';

export function* fetchFootballEventsSaga() { // eslint-disable-line
  try {
    const data = yield call(fetchFootballEventsFromApi);
    yield put(finishedFetchingFootballEvents(data.events));
  } catch (error) {
    yield put(errorFetchingFootballEvents(error));
  }
}

export function* selectFootballEventSaga() {
  console.log('benz');
  yield takeEvery(SELECT_EVENT, selectFootballEvent);
}

export function* sagas() {
  yield [
    call(fetchFootballEventsSaga),
    call(selectFootballEvent)
  ];
}

export default sagas;