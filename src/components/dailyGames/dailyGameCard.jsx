import React from 'react';
import PropTypes from 'prop-types';
import TeamRow from '../gameScores/teamRow';

const DailyGameCard = ({ gameDetails }) => {
  return(
    <div className="card">
      <TeamRow
        abbr={gameDetails.awayTeam.Abbreviation}
        city={gameDetails.awayTeam.Abbreviation}
      />
      <TeamRow
        abbr={gameDetails.homeTeam.Abbreviation}
        city={gameDetails.homeTeam.Abbreviation}
        time={gameDetails.time}
      />
    </div>
  );
};

DailyGameCard.propTypes = {
    gameDetails: PropTypes.object,
};

DailyGameCard.defaultPropts = {
    gameDetails: {},
};

export default DailyGameCard;