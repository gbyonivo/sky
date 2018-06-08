import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

const PriceFormatToggle = ({ isDecimalFormat, togglePriceFormat }) =>
  <div onClick={togglePriceFormat}>
    {isDecimalFormat ? 'decimal' : 'fraction'}
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