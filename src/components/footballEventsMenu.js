import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import FootballEventsMenuItem from './footballEventsMenuItem';
import PriceFormatToggle from './priceFormatToggle';
import ShowPrimaryMarketToggle from './showPrimaryMarketToggle';
import { selectGroupedFootballEvents, selectIsFetching, selectError } from '../selectors';

import styles from './footballEventsMenu.scss';
import { getIsViewingEvent } from '../functions';

class FootballEventsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: !getIsViewingEvent()
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  }
  render() {
    const { groupedFootballEvents } = this.props;
    const { isExpanded } = this.state;
    const isViewingEvent = getIsViewingEvent();
    return (<div className={`
      ${styles.footballEventsMenu}
      ${isExpanded ? styles.isExpanded : styles.isCollapsed}
      ${isViewingEvent ? '' : styles.onlyListOnScreen}`
    }>
      {
        isViewingEvent
          ? <div onClick={() => this.toggle()} className={styles.toggle}>Live Events</div>
          : null
      }
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
                    <FootballEventsMenuItem key={footballEvent.eventId} footballEvent={footballEvent} hideList={this.toggle}/>)
                }
              </ul>
            </div>)
        }
      </div>
    </div>);
  }
}

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