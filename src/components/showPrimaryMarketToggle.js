import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

const ShowPrimaryMarkToggle = ({ showPrimaryMarket, toggleShowPrimaryMark }) =>
  <div onClick={toggleShowPrimaryMark}>
    {showPrimaryMarket ? 'market-show' : 'market-hide'}
  </div>;

ShowPrimaryMarkToggle.defaultProps = {
  showPrimaryMarket: false
};

ShowPrimaryMarkToggle.propTypes = {
  showPrimaryMarket: PropTypes.bool.isRequired,
  toggleShowPrimaryMark: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { showPrimaryMarket } }) => ({
  showPrimaryMarket
});

const mapActionsToProps = dispatch => ({
  toggleShowPrimaryMark: compose(dispatch, actions.toggleShowPrimaryMark)
});

export default connect(mapStateToProps, mapActionsToProps)(ShowPrimaryMarkToggle);