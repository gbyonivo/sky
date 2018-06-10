import { groupEvents } from '../../src/functions';

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