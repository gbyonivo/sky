import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import FootballEventsMenuItem from './footballEventsMenuItem';
import PriceFormatToggle from './priceFormatToggle';
import ShowPrimaryMarketToggle from './showPrimaryMarketToggle';

const FootballEventsMenu = ({ footballEvents }) =>
  <div>
    <h2>Football Events</h2>
    <PriceFormatToggle/>
    <ShowPrimaryMarketToggle/>
    <ul>
      {footballEvents.map(footballEvent =>
        <FootballEventsMenuItem key={footballEvent.eventId} footballEvent={footballEvent} />)}
    </ul>
  </div>;

FootballEventsMenu.defaultProps = {
  footballEvents: []
};

FootballEventsMenu.propTypes = {
  footballEvents: PropTypes.array.isRequired,
  fetchFootballEvents: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { footballEvents, isFetching, error } }) => ({
  footballEvents,
  isFetching,
  error
});

const mapActionsToProps = dispatch => ({
  fetchFootballEvents: compose(dispatch, actions.fetchFootballEvents)
});

export default connect(mapStateToProps, mapActionsToProps)(FootballEventsMenu);