import { groupEvents, groupCorrectScoreOutcomes, largestArrayLength, getPriceTextAndValue, getPriceTextAndValueForWDW, attachOutcomesToEvents } from '../../src/functions';

const mockData = [
  { a: 'liverpool', typeName: 'red' },
  { a: 'liverpool', typeName: 'red', linkedEventTypeName: 'champs' },
  { a: 'liverpool', typeName: 'red', linkedEventTypeName: 'champs' },
];


describe('groupEvents', () => {
  it('should group by typeName', () => {
    const actual = groupEvents(mockData);
    const expected = { red: [...mockData] };
    expect(actual).toMatchObject(expected);
  });
  it('should group by linkedEventTypeName', () => {
    const [first, ...rest] = mockData;
    const actual = groupEvents(rest);
    const expected = { champs: [...rest] };
    expect(actual).toMatchObject(expected);
  });
});

const mockOutcomesData = [
  { type: 'home', id: 1 },
  { type: 'home', id: 2 },
  { type: 'away' },
  { type: 'draw' },
];

describe('groupCorrectScoreOutcome', () => {
  it('should group correct score outcome', () => {
    const actual = groupCorrectScoreOutcomes(mockOutcomesData);
    const [home1, home2, away, draw] = mockOutcomesData;
    const expected = {
      home: [home1, home2],
      away: [away],
      draw: [draw]
    };
    expect(actual).toMatchObject(expected);
  });
});

describe('lasrgetArrayLength', () => {
  it('should return largest array\'s length', () => {
    const actual = largestArrayLength({ home: [1], away: [1, 2], draw: [1, 3, 5] });
    expect(actual).toBe(3);
  });
});

describe('getPriceTextAndValue', () => {
  it('should return priceTextAndValueObject', () => {
    const actual = getPriceTextAndValue({ score: { home: 1, away: 0 }, price: 2 });
    expect(actual).toMatchObject({ price: 2, suffixText: '1 - 0' });
  });
});

describe('getPriceTextAndValueForWDW', () => {
  it('should return priceTextAndValueObject', () => {
    const actual = getPriceTextAndValueForWDW({ type: 'home', price: 2 });
    expect(actual).toMatchObject({ price: 2, suffixText: 'home' });
  });
});

describe('attachOutcomesToEvents', () => {
  it('should return events with primaryMarketId and primaryOutcomeId', () => {
    const actual = attachOutcomesToEvents([{ eventId: 1 }], { 1: [{ marketId: 2 }] }, { 2: [{ outcomeId: 3 }] });
    const expected = [{ eventId: 1, primaryMarketId: 2, primaryOutcomeIds: [3] }];
    expect(actual).toMatchObject(expected);
  });
});