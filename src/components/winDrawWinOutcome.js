import React from 'react';
import PropTypes from 'prop-types';
import Price from './price';
import { getPriceTextAndValueForWDW } from '../functions';
import styles from './winDrawWinOutcome.scss';

const WinDrawWinOutcome = ({ outcomes }) => {
  const home = outcomes.home[0];
  const draw = outcomes.draw[0];
  const away = outcomes.away[0];
  return (<table className={styles.winDrawWinOutcome}>
    <tbody>
      <tr>
        <td>{home ? <Price {...getPriceTextAndValueForWDW(home)} type="correctScore" /> : '-'}</td>
        <td>{draw ? <Price {...getPriceTextAndValueForWDW(draw)} type="correctScore" /> : '-'}</td>
        <td>{away ? <Price {...getPriceTextAndValueForWDW(away)} type="correctScore" /> : '-'}</td>
      </tr>
    </tbody>
  </table>);
};

WinDrawWinOutcome.propTypes = {
  outcomes: PropTypes.object.isRequired
};

export default WinDrawWinOutcome;