import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './price.scss'; // eslint-disable-line

const Price = ({
  price, suffixText, isDecimalFormat, className, type, status
}) =>
  <div className={`
    ${styles.price}
    ${styles[type]}
    ${className}
    ${status.suspended ? styles.suspended : ''}`
  }>
    <span className={styles.text}>{suffixText}</span>
    {
      status.active
        ? <span className={styles.priceValue}>
          {status.suspended // eslint-disable-line
            ? 'Susp'
            : isDecimalFormat
              ? (Math.round(price.decimal * 100) / 100)
              : `${price.num}/${price.den}`
          }
        </span>
        : <span className={styles.priceValue}>-</span>
    }
  </div>;

Price.defaultProps = {
  price: {
    decimal: 1,
    num: 0,
    den: 0
  },
  className: '',
  type: 'long',
  status: { active: true }
};

Price.propTypes = {
  price: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired,
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