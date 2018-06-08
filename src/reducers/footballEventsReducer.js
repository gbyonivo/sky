import {
  FETCH_FOOTBALL_EVENTS,
  FINISHED_FETCHING_EVENTS,
  ERROR_FETCHING_EVENTS,
  SELECT_EVENT,
  TOGGLE_PRICE_FORMAT,
  TOGGLE_PRIMARY_MARKET,
  FETCH_FOOTBALL_EVENT,
  FINISHED_FETCHING_EVENT
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isFetchingFootballEvent: false,
  footballEvents: [],
  footballEventData: {},
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
      footballEvents: payload.events,
      isFetching: false
    };
  case FETCH_FOOTBALL_EVENT:
    return {
      ...state,
      isFetchingFootballEvent: true
    };
  case FINISHED_FETCHING_EVENT:
    return {
      ...state,
      footballEventData: payload.data,
      isFetchingFootballEvent: false
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

