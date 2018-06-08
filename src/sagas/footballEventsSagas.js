import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchFootballEventsFromApi, fetchFootballEventFromApi } from '../api/apiService';
import {
  finishedFetchingFootballEvents,
  errorFetchingFootballEvents,
  finishedFetchingFootballEvent,
} from '../actions';
import { FETCH_FOOTBALL_EVENT } from '../constants/actionTypes';

export function* fetchFootballEventsSaga() {
  try {
    const data = yield call(fetchFootballEventsFromApi);
    yield put(finishedFetchingFootballEvents(data.events, data.markets, data.outcomes));
  } catch (error) {
    yield put(errorFetchingFootballEvents(error));
  }
}

export function* fetchFootballEventSaga({ payload: { eventId } }) {
  try {
    const data = yield call(fetchFootballEventFromApi, eventId);
    yield put(finishedFetchingFootballEvent(data));
  } catch (error) {
    yield put(errorFetchingFootballEvents(error));
  }
}

export function* sagas() {
  yield all([
    call(fetchFootballEventsSaga),
    takeLatest(FETCH_FOOTBALL_EVENT, fetchFootballEventSaga),
  ]);
}

export default sagas;