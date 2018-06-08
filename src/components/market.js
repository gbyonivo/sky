import React from 'react';
import PropTypes from 'prop-types';
import Outcomes from './outcomes';

const Market = ({ market }) =>
  <div>
    {market.name}
    <Outcomes marketId={market.marketId}/>
  </div>;

Market.propTypes = {
  market: PropTypes.object.isRequired
};

export default Market;