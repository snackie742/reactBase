import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/scoreboard.css';

const PitchingSummary = ({ winningPitcher, losingPitcher, savingPitcher }) => {
    return(
      <div className="col-lg pitchingSpacer" >
        <div className="row">{`W - ${winningPitcher.player.FirstName} ${winningPitcher.player.LastName}`}</div>
        <div className="row">{`L - ${losingPitcher.player.FirstName} ${losingPitcher.player.LastName}`}</div>
        {savingPitcher.player.FirstName &&
        <div className="row">{`S - ${savingPitcher.player.FirstName} ${savingPitcher.player.LastName}`}</div>
        }
      </div>
);
}

PitchingSummary.propTypes = {
    winningPitcher: PropTypes.object,
    losingPitcher: PropTypes.object,
    savingPitcher: PropTypes.object,
};

PitchingSummary.defaultProps = {
    winningPitcher: { player: { FirstName: '', LastName: ''}},
    losingPitcher: { player: { FirstName: '', LastName: ''}},
    savingPitcher: { player: { FirstName: '', LastName: ''}},
};

export default PitchingSummary;