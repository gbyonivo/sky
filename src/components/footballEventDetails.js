import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Loading from './loading';
import Markets from './markets';

import styles from './footballEventDetails.scss';
import { getStartTime } from '../functions';

class FootballEventDetails extends Component {
  componentDidMount() {
    const { fetchFootballEvent, match } = this.props;
    fetchFootballEvent(match.params.id);
  }
  componentWillReceiveProps({ fetchFootballEvent, match: { params: { id } } }) {
    if (parseInt(id, 10) !== parseInt(this.props.match.params.id, 10)) {
      fetchFootballEvent(parseInt(id, 10));
    }
  }
  render() {
    const { event, isFetchingFootballEvent, match: { params: { id } } } = this.props;
    return (<div className={styles.footballEventDetails}>
      <h2 className={styles.footballEventDetailsHeader}>
        {
          isFetchingFootballEvent || !event
            ? 'Event Details'
            : `${getStartTime(event.startTime)} ${event.name}`
        }
      </h2>
      {
        isFetchingFootballEvent || !event
          ? <Loading />
          : <Markets eventId={parseInt(id, 10)} />
      }
    </div>);
  }
}

FootballEventDetails.propTypes = {
  event: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isFetchingFootballEvent: PropTypes.bool.isRequired,
  fetchFootballEvent: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { event, isFetchingFootballEvent } }) => ({
  event,
  isFetchingFootballEvent
});

const mapActionsToProps = dispatch => ({
  fetchFootballEvent: compose(dispatch, actions.fetchFootballEvent)
});

export default connect(mapStateToProps, mapActionsToProps)(FootballEventDetails);