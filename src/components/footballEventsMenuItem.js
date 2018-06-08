import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Price from './price';

const FootballEventsMenuItem = ({ footballEvent, selectFootballEvent }) =>
  <li onClick={() => selectFootballEvent(footballEvent.eventId)}>
    <div>{footballEvent.name}</div>
    <div>
      <span><Price price={footballEvent.prices.home} suffixText="Win"/></span>
      <span><Price price={footballEvent.prices.draw} suffixText="Draw"/></span>
      <span><Price price={footballEvent.prices.away} suffixText="Win"/></span>
    </div>
  </li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired,
  selectFootballEvent: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapActionToProps = dispatch => ({
  selectFootballEvent: compose(dispatch, actions.selectFootballEvent)
});

export default connect(mapStateToProps, mapActionToProps)(FootballEventsMenuItem);
