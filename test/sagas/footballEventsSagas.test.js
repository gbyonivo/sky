import { call, put } from 'redux-saga/effects';
import { fetchFootballEventsSaga } from '../../src/sagas/footballEventsSagas';
import { fetchFootballEventsFromApi } from '../../src/api/apiService';
import { finishedFetchingFootballEvents } from '../../src/actions';

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
});