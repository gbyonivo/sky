import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Price from './price';

import styles from './footballEventsMenuItem.scss';

const FootballEventsMenuItem = ({ footballEvent, showPrimaryMarket }) =>
  <li className={styles.footballEventsMenuItem}>
    <Link to={`/event/${footballEvent.eventId}`}>
      <div className={styles.footballEventsMenuItemName}>{footballEvent.name}</div>
      {showPrimaryMarket
        ? <div className={styles.footballEventsMenuItemPrices}>
          <div className={styles.price}><Price price={footballEvent.prices.home} suffixText="Win" type={'short'} /></div>
          <div className={styles.price}><Price price={footballEvent.prices.draw} suffixText="Draw" type={'short'} /></div>
          <div className={styles.price}><Price price={footballEvent.prices.away} suffixText="Win" type={'short'} /></div>
        </div>
        : null
      }
    </Link>
  </li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired,
  showPrimaryMarket: PropTypes.bool.isRequired
};

const mapStateToProps = ({ footballEventsReducer: { showPrimaryMarket } }) => ({
  showPrimaryMarket
});

const mapActionToProps = () => ({});

export default connect(mapStateToProps, mapActionToProps)(FootballEventsMenuItem);
