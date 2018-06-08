import React from 'react';
import PropTypes from 'prop-types';
import Price from './price';

const Outcome = ({ outcome }) =>
  <div><Price suffixText={outcome.name} price={outcome.price}/></div>;

Outcome.propTypes = {
  outcome: PropTypes.object.isRequired
};

export default Outcome;