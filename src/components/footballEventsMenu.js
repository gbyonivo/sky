import React from 'react';
import PropTypes from 'prop-types';

const FootballEventsMenu = () => <div>
  YNWA!!!!
</div>;

FootballEventsMenu.defaultProps = {
  events: []
};

FootballEventsMenu.propTypes = {
  events: PropTypes.array.isRequired
};

export default FootballEventsMenu;