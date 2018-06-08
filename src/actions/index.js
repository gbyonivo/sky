import {
  FETCH_FOOTBALL_EVENTS,
  FINISHED_FETCHING_EVENTS,
  ERROR_FETCHING_EVENTS,
  SELECT_EVENT,
  TOGGLE_PRICE_FORMAT
} from '../constants/actionTypes';
import { attachPricesToEvents } from '../functions';

export const fetchFootballEvents = () => ({
  type: FETCH_FOOTBALL_EVENTS
});

export const finishedFetchingFootballEvents = (events, markets, outcomes) => ({
  type: FINISHED_FETCHING_EVENTS,
  payload: { events: attachPricesToEvents(events, markets, outcomes) }
});

export const errorFetchingFootballEvents = error => ({
  type: ERROR_FETCHING_EVENTS,
  payload: { error }
});

export const selectFootballEvent = eventId => ({
  type: SELECT_EVENT,
  payload: { eventId }
});

export const togglePriceFormat = isDecimalFormat => ({
  type: TOGGLE_PRICE_FORMAT,
  payload: { isDecimalFormat }
});