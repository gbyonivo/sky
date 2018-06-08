import {
  FETCH_FOOTBALL_EVENTS,
  FINISHED_FETCHING_EVENTS,
  ERROR_FETCHING_EVENTS,
  SELECT_EVENT,
  TOGGLE_PRICE_FORMAT,
  TOGGLE_PRIMARY_MARKET
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  footballEvents: [],
  error: null,
  selectedFootballEventId: undefined,
  isDecimalFormat: true,
  showPrimaryMarket: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_FOOTBALL_EVENTS:
    return {
      ...state,
      isFetching: true
    };
  case FINISHED_FETCHING_EVENTS:
    return {
      ...state,
      footballEvents: payload.events
    };
  case ERROR_FETCHING_EVENTS:
    return {
      ...state,
      error: payload.error
    };
  case SELECT_EVENT:
    return {
      ...state,
      selectedFootballEventId: payload.eventId
    };
  case TOGGLE_PRICE_FORMAT:
    return {
      ...state,
      isDecimalFormat: !state.isDecimalFormat
    };
  case TOGGLE_PRIMARY_MARKET:
    return {
      ...state,
      showPrimaryMarket: !state.showPrimaryMarket
    };
  default:
    return state;
  }
};

