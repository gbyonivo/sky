import React from 'react';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import Market from '../../src/components/market';
import { footballEventsReducer, markets } from '../__testdata__/footballEventsReducer';

const props = {
  market: markets[2][0]
};

describe('Market component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer });
    const actual = renderer.create(<Provider store={store}><Market {...props}/></Provider>);
    expect(actual).toMatchSnapshot();
  });
});