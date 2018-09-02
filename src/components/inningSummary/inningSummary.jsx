import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InningSummaryStats from './inningSummaryStats';
import '../../styles/scoreboard.css';

export const InningSummary = ({ summary, awayRHE, homeRHE }) => {
    let showDash = false;
    if (parseInt(homeRHE.runs, 10) > parseInt(awayRHE.runs, 10) &&
      summary.length < 10) {
      showDash = true;
    }
    return(
    <Fragment>
      { summary && summary.map((inning, index) => (
          <InningSummaryStats
             key={index}
             statAbbr={inning['@number']}
             awayValue={inning.awayScore}
             homeValue={index === 8 && showDash ? '-' : inning.homeScore}
          />
        ))
      } 
    <InningSummaryStats
      statAbbr={"R"}
      awayValue={awayRHE.runs}
      homeValue={homeRHE.runs}
      className="scoreBoardSpacer"
    />
    <InningSummaryStats
      statAbbr={"H"}
      awayValue={awayRHE.hits}
      homeValue={homeRHE.hits}
    />
    <InningSummaryStats
      statAbbr={"E"}
      awayValue={awayRHE.errors}
      homeValue={homeRHE.errors}
    />
    </Fragment>
);
}

InningSummary.propTypes = {
    summary: PropTypes.array.isRequired,
    awayRHE: PropTypes.object.isRequired,
    homeRHE: PropTypes.object.isRequired,
};

export default InningSummary;