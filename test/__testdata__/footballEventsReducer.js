export const events = [
  {
    eventId: 1,
    name: 'Air Benders VS Fire Benders',
    typeName: 'bend',
    linkedEventTypeName: 'competition'
  },
  {
    eventId: 2,
    name: 'Shaolin Clan VS Taichi Fury',
    typeName: 'fight',
    linkedEventTypeName: 'competition'
  },
];

export const markets = {
  1: [{
    name: 'Sand Village Market',
    status: {},
    marketId: 3,
    marketType: 'Dust',
    eventId: 1
  }],
  2: [{
    name: 'Water Flow Villa',
    marketType: 'Drops',
    status: {},
    marketId: 4,
    eventId: 2
  }]
};

export const outcomes = {
  3: [
    {
      marketId: 3,
      eventId: 1,
      name: 'bitter ramos on salah',
      type: 'home',
      status: { active: true, suspended: true },
      price: { num: 1, den: 10, decimal: 0.1 }
    },
    {
      marketId: 3,
      eventId: 1,
      name: 'sign fekir!',
      type: 'away',
      status: { active: true, suspended: false },
      price: { num: 2, den: 10, decimal: 0.1 }
    }
  ],
  4: [
    {
      marketId: 4,
      eventId: 2,
      name: 'nigeria tops group',
      type: 'home',
      status: { active: true, suspended: true },
      price: { num: 1, den: 10, decimal: 0.1 }
    },
    {
      marketId: 4,
      eventId: 2,
      name: 'liverpool win prem league',
      type: 'away',
      status: { active: true, suspended: false },
      price: { num: 2, den: 10, decimal: 0.1 }
    }
  ]
};

export const footballEventsReducer = {
  events,
  outcomes,
  markets,
  footballEvent: events[0],
  isFetching: false,
  isFetchingFootballEvent: false,
  marketsBeingFetched: [],
  isDecimalFormat: false,
  error: null,
  showPrimaryMarket: false
};