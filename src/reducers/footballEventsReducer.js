import {
  FETCH_FOOTBALL_EVENTS,
  FINISHED_FETCHING_EVENTS,
  ERROR_FETCHING_EVENTS,
  SELECT_EVENT,
  TOGGLE_PRICE_FORMAT,
  TOGGLE_PRIMARY_MARKET,
  FETCH_FOOTBALL_EVENT,
  FINISHED_FETCHING_EVENT,
  FINISHED_FETCHING_MARKET,
  FETCH_MARKET,
  OUTCOME_STATUS,
  PRICE_CHANGE,
  MARKET_STATUS
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isFetchingFootballEvent: false,
  footballEvents: [],
  event: {},
  outcomes: {},
  markets: {},
  error: null,
  selectedFootballEventId: undefined,
  isDecimalFormat: false,
  showPrimaryMarket: false,
  marketsBeingFetched: []
};

const ACTION_HANDLERS = {

  [FETCH_FOOTBALL_EVENTS]: state => ({ ...state, isFetching: true }),

  [FINISHED_FETCHING_EVENTS]: (state, { payload }) => ({
    ...state,
    footballEvents: payload.events,
    outcomes: { ...state.outcomes, ...payload.outcomes },
    markets: { ...state.markets, ...payload.markets },
    isFetching: false
  }),

  [FETCH_FOOTBALL_EVENT]: state => ({ ...state, isFetchingFootballEvent: true }),

  [FINISHED_FETCHING_EVENT]: (state, { payload }) => ({
    ...state,
    ...{
      event: payload.data.event,
      outcomes: { ...state.outcomes, ...payload.data.outcomes },
      markets: { ...state.markets, ...payload.data.markets },
      isFetchingFootballEvent: false
    }
  }),

  [ERROR_FETCHING_EVENTS]: (state, { payload }) => ({ ...state, error: payload.error }),

  [SELECT_EVENT]: (state, { payload }) => ({ ...state, selectedFootballEventId: payload.eventId }),

  [TOGGLE_PRICE_FORMAT]: state => ({ ...state, isDecimalFormat: !state.isDecimalFormat }),

  [TOGGLE_PRIMARY_MARKET]: state => ({ ...state, showPrimaryMarket: !state.showPrimaryMarket }),

  [FETCH_MARKET]: (state, { payload }) => ({ ...state, marketsBeingFetched: [...state.marketsBeingFetched, payload.marketId] }),

  [FINISHED_FETCHING_MARKET]: (state, { payload }) => ({
    ...state,
    outcomes: {
      ...state.outcomes,
      ...payload.data.outcomes
    },
    marketsBeingFetched: state.marketsBeingFetched.filter(marketId => marketId !== payload.data.market.marketId)
  }),

  [PRICE_CHANGE]: (
    state,
    {
      payload: {
        status, marketId, eventId, outcomeId, price
      }
    }
  ) => {
    const marketIndex = state.markets[eventId].findIndex(market => market.marketId === marketId);
    const newMarket = { ...state.markets[eventId][marketIndex], ...{ status } };
    const marketsClone = [...state.markets[eventId]];
    marketsClone[marketIndex] = newMarket;

    const outcomeIndex = state.outcomes[marketId].findIndex(outcome => outcome.outcomeId === outcomeId);
    const newOutcome = { ...state.outcomes[marketId][outcomeIndex], ...{ price } };
    const outcomesClone = [...(state.outcomes[marketId] || [])];
    outcomesClone[outcomeIndex] = newOutcome;
    return {
      ...state,
      ...{
        markets: { ...state.markets, ...{ [eventId]: marketsClone } },
        outcomes: { ...state.outcomes, ...{ [marketId]: outcomesClone } },
      }
    };
  },

  [OUTCOME_STATUS]: (
    state,
    {
      payload: {
        status, marketId, outcomeId
      }
    }
  ) => {
    const outcomeIndex = state.outcomes[marketId].findIndex(outcome => outcome.outcomeId === outcomeId);
    const newOutcome = { ...state.outcomes[marketId][outcomeIndex], ...{ status } };
    const outcomesClone = [...(state.outcomes[marketId] || [])];
    outcomesClone[outcomeIndex] = newOutcome;
    return {
      ...state,
      ...{
        outcomes: { ...state.outcomes, ...{ [marketId]: outcomesClone } },
      }
    };
  },

  [MARKET_STATUS]: (
    state,
    {
      payload: {
        status, marketId, eventId
      }
    }
  ) => {
    const marketIndex = state.markets[eventId].findIndex(market => market.marketId === marketId);
    const newMarket = { ...state.markets[eventId][marketIndex], ...{ status } };
    const marketsClone = [...state.markets[eventId]];
    marketsClone[marketIndex] = newMarket;
    return {
      ...state,
      ...{
        market: { ...state.market, ...{ [eventId]: marketsClone } }
      }
    };
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

