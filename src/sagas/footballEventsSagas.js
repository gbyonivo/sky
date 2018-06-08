import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchFootballEventsFromApi, fetchFootballEventFromApi, fetchMarketFromApi } from '../api/apiService';
import {
  finishedFetchingFootballEvents,
  errorFetchingFootballEvents,
  finishedFetchingFootballEvent,
  finishedFetchingMarket,
  errorFetchingMarket,
} from '../actions';
import { FETCH_FOOTBALL_EVENT, FETCH_MARKET } from '../constants/actionTypes';

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

export function* fetchMarketSaga({ payload: { marketId } }) {
  try {
    const data = yield call(fetchMarketFromApi, marketId);
    yield put(finishedFetchingMarket(data));
  } catch (error) {
    yield put(errorFetchingMarket(error, marketId));
  }
}

export function* sagas() {
  yield all([
    call(fetchFootballEventsSaga),
    takeLatest(FETCH_FOOTBALL_EVENT, fetchFootballEventSaga),
    takeEvery(FETCH_MARKET, fetchMarketSaga)
  ]);
}

export default sagas;