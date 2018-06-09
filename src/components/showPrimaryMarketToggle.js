import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import styles from './showPrimaryMarketToggle.scss';
import Switch from './common/switch';

const ShowPrimaryMarkToggle = ({ showPrimaryMarket, toggleShowPrimaryMark }) =>
  <div className={styles.showPrimaryMarketToggle}>
    <div className={styles.text}>Display Primary Market</div>
    <Switch value={showPrimaryMarket} onClick={toggleShowPrimaryMark} className={styles.toggle}/>
  </div>;

ShowPrimaryMarkToggle.defaultProps = {
  showPrimaryMarket: false
};

ShowPrimaryMarkToggle.propTypes = {
  showPrimaryMarket: PropTypes.bool.isRequired,
  toggleShowPrimaryMark: PropTypes.func.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { showPrimaryMarket } }) => ({
  showPrimaryMarket
});

const mapActionsToProps = dispatch => ({
  toggleShowPrimaryMark: compose(dispatch, actions.toggleShowPrimaryMark)
});

export default connect(mapStateToProps, mapActionsToProps)(ShowPrimaryMarkToggle);