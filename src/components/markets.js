import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMarkets } from '../selectors';
import Outcomes from './outcomes';

import styles from './markets.scss';

const Markets = ({ markets }) =>
  <div className={styles.markets}>{
    markets.map(market =>
      <Outcomes market={market} key={market.marketId}/>)
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