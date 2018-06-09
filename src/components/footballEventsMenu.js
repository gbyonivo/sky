import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import FootballEventsMenuItem from './footballEventsMenuItem';
import PriceFormatToggle from './priceFormatToggle';
import ShowPrimaryMarketToggle from './showPrimaryMarketToggle';
import { selectGroupedFootballEvents, selectIsFetching, selectError } from '../selectors';

import styles from './footballEventsMenu.scss';

const FootballEventsMenu = ({ groupedFootballEvents }) =>
  <div className={styles.footballEventsMenu}>
    <h2 className={styles.footballEventsMenuHeader}>Football Events</h2>
    <PriceFormatToggle />
    <ShowPrimaryMarketToggle />
    <div className={styles.footballEventsGroups}>
      {
        Object.keys(groupedFootballEvents).map(key =>
          <div key={key} className={styles.group}>
            <h4 className={styles.groupHeader}>{key}</h4>
            <ul className={styles.groupList}>
              {
                groupedFootballEvents[key].map(footballEvent =>
                  <FootballEventsMenuItem key={footballEvent.eventId} footballEvent={footballEvent} />)
              }
            </ul>
          </div>)
      }
    </div>
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