import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import Price from '../../src/components/price';

const priceProps = {
  price: { num: 1, den: 2, decimal: 0.5 },
  status: { suspended: true, active: false },
  suffixText: 'Sky',
  className: 'blue',
  type: 'short',
  isDecimalFormat: true
};

describe('Price component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer: { isDecimalFormat: false, events: [] } });
    const actual = renderer.create(<Provider store={store}><Price {...priceProps}/></Provider>);
    expect(actual).toMatchSnapshot();
  });
});