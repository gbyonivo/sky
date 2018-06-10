import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../src/components/loading';

describe('Loading component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<Loading />);
    expect(actual).toMatchSnapshot();
  });
});