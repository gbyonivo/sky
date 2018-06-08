import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import FootballEventsMenuItem from './footballEventsMenuItem';
import PriceFormatToggle from './priceFormatToggle';
import ShowPrimaryMarketToggle from './showPrimaryMarketToggle';
import { selectGroupedFootballEvents, selectIsFetching, selectError } from '../selectors';

const FootballEventsMenu = ({ groupedFootballEvents }) =>
  <div>
    <h2>Football Events</h2>
    <PriceFormatToggle />
    <ShowPrimaryMarketToggle />
    {
      Object.keys(groupedFootballEvents).map(key =>
        <div key={key}>
          <h2>{key}</h2>
          <ul>
            {
              groupedFootballEvents[key].map(footballEvent =>
                <FootballEventsMenuItem key={footballEvent.eventId} footballEvent={footballEvent} />)
            }
          </ul>
        </div>)
    }
  </div>;

FootballEventsMenu.defaultProps = {
  groupedFootballEvents: {}
};

FootballEventsMenu.propTypes = {
  groupedFootballEvents: PropTypes.object.isRequired,
  fetchFootballEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  groupedFootballEvents: selectGroupedFootballEvents(state),
  isFetching: selectIsFetching(state),
  error: selectError(state)
});

const mapActionsToProps = dispatch => ({
  fetchFootballEvents: compose(dispatch, actions.fetchFootballEvents)
});

export default connect(mapStateToProps, mapActionsToProps)(FootballEventsMenu);