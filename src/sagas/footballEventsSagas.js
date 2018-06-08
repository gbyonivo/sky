import { call, put } from 'redux-saga/effects';
import { fetchFootballEventsFromApi } from '../api/apiService';
import { finishedFetchingFootballEvents, errorFetchingFootballEvents } from '../actions';

export function* fetchFootballEventsSaga() { // eslint-disable-line
  try {
    const data = yield call(fetchFootballEventsFromApi);
    yield put(finishedFetchingFootballEvents(data.events));
  } catch (error) {
    yield put(errorFetchingFootballEvents(error));
  }
}

export function* sagas() {
  yield [
    call(fetchFootballEventsSaga)
  ];
}

export default sagas;