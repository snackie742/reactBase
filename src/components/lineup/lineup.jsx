import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/scoreboard.css';

export const Lineup = ({ playerEntry }) => {
    // AB R H RBI BB K AVG OBP SLG
    return(
      <div className="col-lg lineupCard" >
        <div className="row">
          <div className="col-lg-5">
          {`${playerEntry.player.FirstName} ${playerEntry.player.LastName}`}
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col lineupEntry"> {`${playerEntry.stats.AtBats['#text']}`}</div>
              <div className="col lineupEntry"> {`${playerEntry.stats.Runs['#text']}`}</div>
              <div className="col lineupEntry"> {`${playerEntry.stats.Hits['#text']}`}</div>
              <div className="col lineupEntry"> {`${playerEntry.stats.BatterWalks['#text']}`}</div>
              <div className="col lineupEntry"> {`${playerEntry.stats.BatterStrikeouts['#text']}`}</div>
              <div className="col lineupEntry"> {`${playerEntry.stats.BattingAvg['#text']}`}</div>
            </div>
         </div>
        </div>
      </div>
);
}

Lineup.propTypes = {
  playerEntry: PropTypes.object,
};

Lineup.defaultProps = {
  playerEntry: { player: { FirstName: '', LastName: ''}},
};

export default Lineup;