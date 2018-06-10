import { call, put, select, take } from 'redux-saga/effects';
import { fetchFootballEventsSaga, fetchFootballEventSaga, fetchMarketSaga, subscribe } from '../../src/sagas/footballEventsSagas';
import { fetchFootballEventsFromApi, fetchFootballEventFromApi, fetchMarketFromApi } from '../../src/api/apiService';
import {
  finishedFetchingFootballEvents,
  errorFetchingFootballEvents,
  finishedFetchingFootballEvent,
  finishedFetchingMarket,
  messageReceived
} from '../../src/actions';

import connectSocket from '../../src/api/websocket';

describe('fetchFootballEventsSaga', () => {
  it('should call fetchFootballEventsFromApi and finishedFetchingFootballEvents', () => {
    const gen = fetchFootballEventsSaga();
    const actual = [
      gen.next(),
      gen.next({ events: [], outcomes: {}, markets: {} }),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchFootballEventsFromApi) },
      { done: false, value: put(finishedFetchingFootballEvents([], {}, {})) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
  it('should fail and call errorFetchingFootballEvents', () => {
    const gen = fetchFootballEventsSaga();
    const actual = [
      gen.next(),
      gen.next(),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchFootballEventsFromApi) },
      { done: false, value: put(errorFetchingFootballEvents('error loading events')) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('fetchFootballEventSaga', () => {
  it('should call fetchFootballEventFromApi and finishedFetchingFootballEvent', () => {
    const gen = fetchFootballEventSaga({ payload: { eventId: 1 } });
    const actual = [
      gen.next(),
      gen.next({ data: { events: [], outcomes: {}, markets: {} } }),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchFootballEventFromApi, 1) },
      { done: false, value: put(finishedFetchingFootballEvent({ data: { events: [], outcomes: {}, markets: {} } })) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('fetchMarketSaga', () => {
  it('should call fetchFootballEventFromApi and finishedFetchingFootballEvent', () => {
    const gen = fetchMarketSaga({ payload: { marketId: 1 } });
    const actual = [
      gen.next(),
      gen.next({}),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchMarketFromApi, 1) },
      { done: false, value: put(finishedFetchingMarket({})) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('fetchMarketSaga', () => {
  it('should call fetchFootballEventFromApi and finishedFetchingFootballEvent', () => {
    const gen = fetchMarketSaga({ payload: { marketId: 1 } });
    const actual = [
      gen.next(),
      gen.next({}),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchMarketFromApi, 1) },
      { done: false, value: put(finishedFetchingMarket({})) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});
