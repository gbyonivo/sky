import React from 'react';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import FootballEventsMenu from '../../src/components/footballEventsMenu';

describe('FootballEventsMenu', () => {
  it('should render correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer: { footballEvents: [] } });
    const actual = renderer.create(<Provider store={store}><FootballEventsMenu/></Provider>).toJSON();
    expect(actual).toMatchSnapshot();
  });
});