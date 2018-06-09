import {
  FETCH_FOOTBALL_EVENTS,
  FETCH_FOOTBALL_EVENT,
  FINISHED_FETCHING_EVENTS,
  FINISHED_FETCHING_EVENT,
  ERROR_FETCHING_EVENTS,
  ERROR_FETCHING_EVENT,
  SELECT_EVENT,
  TOGGLE_PRICE_FORMAT,
  TOGGLE_PRIMARY_MARKET,
  FINISHED_FETCHING_MARKET,
  FETCH_MARKET,
  ERROR_FETCHING_MARKET
} from '../constants/actionTypes';
import { attachOutcomesToEvents } from '../functions';

export const fetchFootballEvents = () => ({
  type: FETCH_FOOTBALL_EVENTS
});

export const finishedFetchingFootballEvents = (events, markets, outcomes) => ({
  type: FINISHED_FETCHING_EVENTS,
  payload: { events: attachOutcomesToEvents(events, markets, outcomes), markets, outcomes }
});

export const errorFetchingFootballEvents = error => ({
  type: ERROR_FETCHING_EVENTS,
  payload: { error }
});

export const errorFetchingFootballEvent = error => ({
  type: ERROR_FETCHING_EVENT,
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

export const toggleShowPrimaryMark = showPrimaryMarket => ({
  type: TOGGLE_PRIMARY_MARKET,
  payload: { showPrimaryMarket }
});

export const fetchFootballEvent = eventId => ({
  type: FETCH_FOOTBALL_EVENT,
  payload: { eventId }
});

export const finishedFetchingFootballEvent = data => ({
  type: FINISHED_FETCHING_EVENT,
  payload: { data }
});

export const fetchMarket = marketId => ({
  type: FETCH_MARKET,
  payload: { marketId }
});

export const finishedFetchingMarket = data => ({
  type: FINISHED_FETCHING_MARKET,
  payload: { data }
});

export const errorFetchingMarket = error => ({
  type: ERROR_FETCHING_MARKET,
  payload: { error }
});

export const messageReceived = (message) => {
  const data = JSON.parse(message.data);
  if (!data.type) {
    return { type: '' };
  }
  return {
    type: data.type,
    payload: {
      ...data.data
    }
  };
};