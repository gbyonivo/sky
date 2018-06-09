export const groupEvents = (events) => {
  let groups = { typeName: {}, linkedEventTypeName: {} };
  let allHaveLinkedTypeName = true;
  groups = events.reduce((acc, currentEvent) => {
    if (!currentEvent.linkedEventTypeName) {
      allHaveLinkedTypeName = false;
    }
    return {
      typeName:
      {
        ...acc.typeName,
        [currentEvent.typeName]: [...(acc.typeName[currentEvent.typeName] || []), currentEvent]
      },
      linkedEventTypeName:
      {
        ...acc.linkedEventTypeName,
        [currentEvent.linkedEventTypeName]: [...(acc.linkedEventTypeName[currentEvent.linkedEventTypeName] || []), currentEvent]
      }
    };
  }, groups);

  return allHaveLinkedTypeName ? groups.linkedEventTypeName : groups.typeName;
};

export const groupCorrectScoreOutcomes = (outcomes, groups = { home: [], away: [], draw: [] }) =>
  outcomes.reduce((acc, current) => ({ ...acc, ...{ [current.type]: [...acc[current.type], current] } }), groups);

export const largestArrayLength = outcomes =>
  [outcomes.home.length, outcomes.draw.length, outcomes.away.length]
    .sort((a, b) => a - b)
    .pop();

export const getPriceTextAndValue = outcome => ({
  price: outcome.price,
  suffixText: `${outcome.score.home} - ${outcome.score.away}`
});

export const getPriceTextAndValueForWDW = outcome => ({
  price: outcome.price,
  suffixText: outcome.type
});

// todo: use router reducer instead
export const getIdFromParam = () => parseInt(window.location.href.split('/').pop(), 10); // eslint-disable-line

export const getIsViewingEvent = () => Number.isInteger(getIdFromParam());

export const attachOutcomesToEvents = (events, markets, outcomes) => // eslint-disable-line
  events.map(event => ({
    ...event,
    primaryMarketId: markets[event.eventId][0].marketId,
    primaryOutcomeIds: outcomes[markets[event.eventId][0].marketId].map(({ outcomeId }) => outcomeId)
  }));