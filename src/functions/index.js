export const attachPricesToEvents = (events, markets, outcomes) => // eslint-disable-line
  events.map(event => ({
    ...event,
    prices: outcomes[markets[event.eventId][0].marketId]
      .reduce((acc, next) => ({ ...acc, [next.type]: next.price }), {})
  }));
