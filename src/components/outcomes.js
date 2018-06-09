import React from 'react';
import PropTypes from 'prop-types';
import { CORRECT_SCORE, WIN__DRAW_WIN } from '../constants/outcomeTypes';
import CorrectScoreOutcomes from './correctScoreOutcomes';
import Price from './price';
import { groupCorrectScoreOutcomes } from '../functions';
import WinDrawWinOutcome from './winDrawWinOutcome';

const Outcomes = ({ outcomes, marketType }) => {
  switch (marketType) {
  case CORRECT_SCORE:
    return <CorrectScoreOutcomes outcomes={groupCorrectScoreOutcomes(outcomes)}/>;
  case WIN__DRAW_WIN:
    return <WinDrawWinOutcome outcomes={groupCorrectScoreOutcomes(outcomes)}/>;
  default:
    return (<div>
      {
        outcomes.map(outcome =>
          <Price suffixText={outcome.name} price={outcome.price} key={outcome.outcomeId} />)
      }
    </div>);
  }
};

Outcomes.propTypes = {
  outcomes: PropTypes.array.isRequired,
  marketType: PropTypes.string.isRequired
};

export default Outcomes;