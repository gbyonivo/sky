import { groupEvents } from '../functions';

export const selectMarkets = ({ footballEventsReducer: { footballEventData } }, eventId) =>
  footballEventData.markets[eventId];

export const selectOutcomes = ({ footballEventsReducer: { footballEventData } }, marketId) =>
  footballEventData.outcomes[marketId];

export const selectIsFetchingMarket = ({ footballEventsReducer: { marketsBeingFetched } }, marketId) =>
  marketsBeingFetched.some(mId => mId === marketId);

export const selectGroupedFootballEvents = ({ footballEventsReducer: { footballEvents } }) => groupEvents(footballEvents);

export const selectIsFetching = ({ footballEventsReducer: { isFetching } }) => isFetching;

export const selectError = ({ footballEventsReducer: { error } }) => error;
