import { FETCH_FOOTBALL_EVENTS, FINISHED_FETCHING_EVENTS, ERROR_FETCHING_EVENTS } from '../constants/actionTypes';

export const fetchFootballEvents = () => ({
  type: FETCH_FOOTBALL_EVENTS
});

export const finishedFetchingFootballEvents = events => ({
  type: FINISHED_FETCHING_EVENTS,
  payload: { events }
});

export const errorFetchingFootballEvents = error => ({
  type: ERROR_FETCHING_EVENTS,
  payload: { error }
});