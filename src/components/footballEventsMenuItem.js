import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Price from './price';

const FootballEventsMenuItem = ({ footballEvent, selectFootballEvent, showPrimaryMarket }) =>
  <li onClick={() => selectFootballEvent(footballEvent.eventId)}>
    <div>{footballEvent.name}</div>
    {showPrimaryMarket
      ? <div>
        <span><Price price={footballEvent.prices.home} suffixText="Win" /></span>
        <span><Price price={footballEvent.prices.draw} suffixText="Draw" /></span>
        <span><Price price={footballEvent.prices.away} suffixText="Win" /></span>
      </div>
      : null
    }
  </li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired,
  selectFootballEvent: PropTypes.func.isRequired,
  showPrimaryMarket: PropTypes.bool.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { showPrimaryMarket } }) => ({
  showPrimaryMarket
});

const mapActionToProps = dispatch => ({
  selectFootballEvent: compose(dispatch, actions.selectFootballEvent)
});

export default connect(mapStateToProps, mapActionToProps)(FootballEventsMenuItem);
