import React from 'react';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import FootballEventDetails from '../../src/components/footballEventDetails';
import { footballEventsReducer } from '../__testdata__/footballEventsReducer';

const props = {
  match: { params: { id: 1 } }
};

describe('FootballEventDetails component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer });
    const actual = renderer.create(<Provider store={store}><FootballEventDetails {...props}/></Provider>);
    expect(actual).toMatchSnapshot();
  });
});