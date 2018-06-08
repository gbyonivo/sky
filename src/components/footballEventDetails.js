import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Loading from './loading';
import Markets from './markets';

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
    const { footballEventData, isFetchingFootballEvent, match: { params: { id } } } = this.props;
    return (<div>
      <h2>Event Details</h2>
      {
        isFetchingFootballEvent || !footballEventData.event
          ? <Loading />
          : <div>
            details: {footballEventData.event.name}
            <Markets eventId={parseInt(id, 10)}/>
          </div>
      }
    </div>);
  }
}

FootballEventDetails.propTypes = {
  footballEventData: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isFetchingFootballEvent: PropTypes.bool.isRequired,
  fetchFootballEvent: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { footballEventData, isFetchingFootballEvent } }) => ({
  footballEventData,
  isFetchingFootballEvent
});

const mapActionsToProps = dispatch => ({
  fetchFootballEvent: compose(dispatch, actions.fetchFootballEvent)
});

export default connect(mapStateToProps, mapActionsToProps)(FootballEventDetails);