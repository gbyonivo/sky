import React from 'react';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import combinedReducer from '../../src/reducers';
import CorrectScoreOutcomes from '../../src/components/correctScoreOutcomes';
import { footballEventsReducer } from '../__testdata__/footballEventsReducer';

const props = {
  outcomes: {
    home: [{
      price: { num: 3, den: 7, decimal: 0.2 }, status: {}, type: 'home', score: { away: 1, home: 4 }
    }],
    away: [{
      price: { num: 1, den: 8, decimal: 0.1 }, status: {}, type: 'away', score: { away: 7, home: 1 }
    }],
    draw: [{
      price: { num: 4, den: 2, decimal: 0.3 }, status: {}, type: 'draw', score: { away: 7, home: 7 }
    }]
  }
};

describe('CorrectScoreOutcomes component', () => {
  it('renders correctly', () => {
    const store = createStore(combinedReducer(), { footballEventsReducer });
    const actual = renderer.create(<Provider store={store}><CorrectScoreOutcomes {...props}/></Provider>);
    expect(actual).toMatchSnapshot();
  });
});