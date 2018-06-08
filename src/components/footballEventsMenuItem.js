import React from 'react';
import PropTypes from 'prop-types';

const FootballEventsMenuItem = ({ footballEvent }) =>
  <li>{footballEvent.name}</li>;

FootballEventsMenuItem.propTypes = {
  footballEvent: PropTypes.object.isRequired
};

export default FootballEventsMenuItem;

