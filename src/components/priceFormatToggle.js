import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Switch from './common/switch';

import styles from './priceFormatToggle.scss';

const PriceFormatToggle = ({ isDecimalFormat, togglePriceFormat }) =>
  <div className={styles.priceFormatToggle}>
    <div className={styles.text} style={{ color: '#ff6464' }}>Fraction Price</div>
    <Switch value={isDecimalFormat} onClick={togglePriceFormat} className={styles.toggle}/>
    <div className={styles.text} style={{ color: '#36d836' }}>Decimal Price</div>
  </div>;

PriceFormatToggle.defaultProps = {
  isDecimalFormat: true
};

PriceFormatToggle.propTypes = {
  isDecimalFormat: PropTypes.bool.isRequired,
  togglePriceFormat: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { isDecimalFormat } }) => ({
  isDecimalFormat
});

const mapActionsToProps = dispatch => ({
  togglePriceFormat: compose(dispatch, actions.togglePriceFormat)
});

export default connect(mapStateToProps, mapActionsToProps)(PriceFormatToggle);