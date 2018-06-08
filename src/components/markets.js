import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMarkets } from '../selectors';
import Market from './market';

const Markets = ({ markets }) =>
  <div>{
    markets.map(market =>
      <Market market={market} key={market.marketId}/>)
  }</div>;

Markets.defaultProps = {
  markets: []
};

Markets.propTypes = {
  markets: PropTypes.array.isRequired,
  eventId: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) =>
  ({ markets: selectMarkets(state, props.eventId) });

export default connect(mapStateToProps)(Markets);