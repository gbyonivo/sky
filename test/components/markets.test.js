import React from 'react';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import Markets from '../../src/components/markets';
import { footballEventsReducer } from '../__testdata__/footballEventsReducer';

const props = {
  eventId: 1
};

describe('Markets component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer });
    const actual = renderer.create(<Provider store={store}><Markets {...props}/></Provider>);
    expect(actual).toMatchSnapshot();
  });
});