import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsFetchingMarket, selectOutcomes } from '../selectors';
import Loading from './loading';
import * as actions from '../actions';
import Outcomes from './outcomes';

import styles from './outcomes.scss';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const { outcomes, fetchMarket, market: { marketId } } = this.props;
    if (outcomes.length === 0) {
      fetchMarket(marketId);
    }
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  }
  render() {
    const { outcomes, isFetchingMarket, market } = this.props;
    const { isExpanded } = this.state;
    return (<div className={`${isExpanded ? styles.isExpanded : styles.isCollapsed} ${styles.market}`}>
      <h4 onClick={this.toggle} className={styles.marketHeader}>{market.name}</h4>
      {
        isFetchingMarket
          ? <Loading />
          : <Outcomes outcomes={outcomes} marketType={market.type}/>
      }

    </div>);
  }
}
Market.defaultProps = {
  outcomes: []
};

Market.propTypes = {
  outcomes: PropTypes.array.isRequired,
  market: PropTypes.object.isRequired,
  fetchMarket: PropTypes.func.isRequired,
  isFetchingMarket: PropTypes.bool.isRequired
};

const mapStateToProps = (state, props) =>
  ({
    outcomes: selectOutcomes(state, props.market.marketId),
    isFetchingMarket: selectIsFetchingMarket(state, props.market.marketId)
  });

const mapActionToProps = dispatch =>
  ({ fetchMarket: compose(dispatch, actions.fetchMarket) });

export default connect(mapStateToProps, mapActionToProps)(Market);