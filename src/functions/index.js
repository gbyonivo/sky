export const attachPricesToEvents = (events, markets, outcomes) => // eslint-disable-line
  events.map(event => ({
    ...event,
    prices: outcomes[markets[event.eventId][0].marketId]
      .reduce((acc, next) => ({ ...acc, [next.type]: next.price }), {})
  }));

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