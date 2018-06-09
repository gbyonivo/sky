import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './price.scss'; // eslint-disable-line

const Price = ({
  price, suffixText, isDecimalFormat, className, type
}) =>
  <div className={`${styles.price} ${styles[type]} ${className}`}>
    <span className={styles.text}>{suffixText}</span>
    <span className={styles.priceValue}>{isDecimalFormat ? (Math.round(price.decimal * 100) / 100) : `${price.num}/${price.den}`}</span>
  </div>;

Price.defaultProps = {
  price: {
    decimal: 1,
    num: 0,
    den: 0
  },
  className: '',
  type: 'long'
};

Price.propTypes = {
  price: PropTypes.object.isRequired,
  suffixText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDecimalFormat: PropTypes.bool.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { isDecimalFormat } }) => ({
  isDecimalFormat
});
const mapActionToProps = () => ({});

export default connect(mapStateToProps, mapActionToProps)(Price);