import React from 'react';
import PropTypes from 'prop-types';

import styles from './switch.scss';

const Switch = ({ value, onClick, className }) =>
  <div className={`${className} ${styles.switch} ${value ? styles.on : styles.off}`} onClick={() => onClick()}>
    <div className={`${styles.ball} ${value ? styles.left : styles.right}`}/>
  </div>;

Switch.defualtProps = {
  className: ''
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Switch;