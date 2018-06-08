import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

const PriceToggle = () =>
  <div></div>;

PriceToggle.defaultProps = {
  isDecimalFormat: true
};

PriceToggle.propTypes = {
  isDecimalFormat: PropTypes.bool.isRequired
};

const mapStateToProps = () => ({});

const mapActionsToProps = () => ({});

export default connect(mapStateToProps, mapActionsToProps)(PriceToggle);