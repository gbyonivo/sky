import { groupEvents } from '../functions';

export const selectMarkets = ({ footballEventsReducer: { markets } }) => markets;

export const selectEventMarkets = ({ footballEventsReducer: { markets } }, eventId) => markets[eventId];

export const selectOutcomes = ({ footballEventsReducer: { outcomes } }) => outcomes;

export const selectMarketOutcomes = ({ footballEventsReducer: { outcomes } }, marketId) => outcomes[marketId];

export const selectIsFetchingMarket = ({ footballEventsReducer: { marketsBeingFetched } }, marketId) =>
  marketsBeingFetched.some(mId => mId === marketId);

export const selectGroupedFootballEvents = ({ footballEventsReducer: { footballEvents } }) => groupEvents(footballEvents);

export const selectIsFetching = ({ footballEventsReducer: { isFetching } }) => isFetching;

export const selectFootballEventData = ({ footballEventsReducer: { event } }) => event;

export const selectShowPrimaryMarket = ({ footballEventsReducer: { showPrimaryMarket } }) => showPrimaryMarket;

export const selectPrimaryOutcomes = ({ footballEventsReducer: { outcomes } }, footballEvent) => outcomes[footballEvent.primaryMarketId];

export const selectError = ({ footballEventsReducer: { error } }) => error;
