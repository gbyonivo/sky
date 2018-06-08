import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectOutcomes, selectIsFetchingMarket } from '../selectors';
import Outcome from './outcome';
import Loading from './loading';
import * as actions from '../actions';

class Outcomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const { outcomes, fetchMarket, marketId } = this.props;
    if (outcomes.length === 0) {
      fetchMarket(marketId);
    }
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  }
  render() {
    const { outcomes, isFetchingMarket } = this.props;
    const { isExpanded } = this.state;
    return (<div style={{ borderBottom: 'solid 1px #ccc' }}>
      <div onClick={this.toggle}>{isExpanded ? 'opened' : 'closed'}</div>
      {
        isFetchingMarket
          ? <Loading />
          : <div>
            {
              outcomes.map(outcome =>
                <Outcome outcome={outcome} key={outcome.outcomeId} />)
            }
          </div>
      }

    </div>);
  }
}
Outcomes.defaultProps = {
  outcomes: []
};

Outcomes.propTypes = {
  outcomes: PropTypes.array.isRequired,
  marketId: PropTypes.number.isRequired,
  fetchMarket: PropTypes.func.isRequired,
  isFetchingMarket: PropTypes.bool.isRequired
};

const mapStateToProps = (state, props) =>
  ({
    outcomes: selectOutcomes(state, props.marketId),
    isFetchingMarket: selectIsFetchingMarket(state, props.marketId)
  });

const mapActionToProps = dispatch =>
  ({ fetchMarket: compose(dispatch, actions.fetchMarket) });

export default connect(mapStateToProps, mapActionToProps)(Outcomes);