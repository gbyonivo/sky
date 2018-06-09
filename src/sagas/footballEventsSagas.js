import { call, put, all, takeLatest, takeEvery, take, select } from 'redux-saga/effects';
import { fetchFootballEventsFromApi, fetchFootballEventFromApi, fetchMarketFromApi } from '../api/apiService';
import {
  finishedFetchingFootballEvents,
  errorFetchingFootballEvents,
  finishedFetchingFootballEvent,
  finishedFetchingMarket,
  errorFetchingMarket,
  messageReceived,
} from '../actions';
import { FETCH_FOOTBALL_EVENT, FETCH_MARKET, FINISHED_FETCHING_EVENT } from '../constants/actionTypes';
import connectSocket from '../api/websocket';
import { selectOutcomes } from '../selectors';
import { MARKET } from '../constants/subscriptionTypes';

function* subscribe() {
  const outcomes = yield select(selectOutcomes);
  const socketChannel = yield call(
    connectSocket,
    {
      eventHandlers: { onmessage: messageReceived },
      subscribeData: { keys: Object.keys(outcomes).map(key => `m.${key}`) }
    }
  );
  while (true) {
    const eventAction = yield take(socketChannel);
    yield put(eventAction);
  }
}

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
    takeEvery(FETCH_MARKET, fetchMarketSaga),
    takeLatest(FINISHED_FETCHING_EVENT, subscribe, MARKET),
    // takeLatest(FINISHED_FETCHING_EVENT, subscribe, OUTCOME)
  ]);
}

export default sagas;