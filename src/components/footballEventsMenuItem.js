import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Price from './price';

import styles from './footballEventsMenuItem.scss';
import { selectShowPrimaryMarket, selectPrimaryOutcomes } from '../selectors';
import { getStartTime } from '../functions';

const FootballEventsMenuItem = ({
  footballEvent, showPrimaryMarket, hideList, primaryOutcomes
}) =>
  <li className={styles.footballEventsMenuItem}>
    <Link to={`/event/${footballEvent.eventId}`} onClick={hideList}>
      <div className={styles.footballEventsMenuItemName}>
        <div className={styles.startTime}>{getStartTime(footballEvent.startTime)}</div>
        <div className={styles.name}>{footballEvent.name}</div>
      </div>
      {showPrimaryMarket
        ? <div className={styles.footballEventsMenuItemPrices}>
          {
            primaryOutcomes.map(outcome =>
              <div className={styles.price} key={outcome.outcomeId}>
                <Price price={outcome.price} suffixText={outcome.type} type={'short'} />
              </div>)
          }
        </div>
        : null
      }
    </Link>
  </li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired,
  hideList: PropTypes.func.isRequired,
  primaryOutcomes: PropTypes.array.isRequired,
  showPrimaryMarket: PropTypes.bool.isRequired
};

const mapStateToProps = (state, props) => ({
  showPrimaryMarket: selectShowPrimaryMarket(state),
  primaryOutcomes: selectPrimaryOutcomes(state, props.footballEvent)
});

export default connect(mapStateToProps)(FootballEventsMenuItem);
