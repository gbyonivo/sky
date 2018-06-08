import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

const FootballEventsMenuItem = ({ footballEvent, selectFootballEvent }) =>
  <li onClick={() => selectFootballEvent(footballEvent.eventId)}>{footballEvent.name}</li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired,
  selectFootballEvent: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapActionToProps = dispatch => ({
  selectFootballEvent: compose(dispatch, actions.selectFootballEvent)
});

export default connect(mapStateToProps, mapActionToProps)(FootballEventsMenuItem);
