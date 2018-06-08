import { FETCH_FOOTBALL_EVENTS, FINISHED_FETCHING_EVENTS, ERROR_FETCHING_EVENTS } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  footballEvents: [],
  error: null,
  selectedFootballEventId: undefined
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
  default:
    return state;
  }
};

