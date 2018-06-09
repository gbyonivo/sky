import React from 'react';
import PropTypes from 'prop-types';
import Price from './price';
import styles from './correctScoreOutcomes.scss';
import { largestArrayLength, getPriceTextAndValue } from '../functions';

const CorrectScoreOutcomes = ({ outcomes }) => <table className={styles.correctScoreOutcomes}>
  <thead>
    <tr><th>Home</th><th>Draw</th><th>Away</th></tr>
  </thead>
  <tbody>
    {[...Array(largestArrayLength(outcomes))].map((_, index) => {
      const home = outcomes.home[index];
      const draw = outcomes.draw[index];
      const away = outcomes.away[index];
      return (<tr key={index}>
        <td>{ home ? <Price {...getPriceTextAndValue(home)} type="correctScore"/> : '-'}</td>
        <td>{ draw ? <Price {...getPriceTextAndValue(draw)} type="correctScore"/> : '-'}</td>
        <td>{ away ? <Price {...getPriceTextAndValue(away)} type="correctScore"/> : '-'}</td>
      </tr>);
    })}
  </tbody>
</table>;

CorrectScoreOutcomes.propTypes = {
  outcomes: PropTypes.object.isRequired
};

export default CorrectScoreOutcomes;