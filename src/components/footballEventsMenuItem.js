import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Price from './price';

const FootballEventsMenuItem = ({ footballEvent, showPrimaryMarket }) =>
  <li>
    <Link to={`/event/${footballEvent.eventId}`}>
      <div>{footballEvent.name}</div>
      {showPrimaryMarket
        ? <div>
          <span><Price price={footballEvent.prices.home} suffixText="Win" /></span>
          <span><Price price={footballEvent.prices.draw} suffixText="Draw" /></span>
          <span><Price price={footballEvent.prices.away} suffixText="Win" /></span>
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
