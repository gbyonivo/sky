import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Price = ({ price, suffixText, isDecimalFormat }) =>
  <div>
    <span>{suffixText}</span>
    <span>{isDecimalFormat ? price.decimal : `${price.num}/${price.den}`}</span>
  </div>;

Price.defaultProps = {
  price: {
    decimal: 1,
    num: 0,
    den: 0
  }
};

Price.propTypes = {
  price: PropTypes.object.isRequired,
  suffixText: PropTypes.string.isRequired,
  isDecimalFormat: PropTypes.bool.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { isDecimalFormat } }) => ({
  isDecimalFormat
});
const mapActionToProps = () => ({});

export default connect(mapStateToProps, mapActionToProps)(Price);