import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/modal';
import InningSummary from '../inningSummary/inningSummary';
import PitchingSummary from '../pitchingSummary/pitchingSummary';
import Lineup from '../lineup/lineup';

const getRHE = teamStats => ({
  runs: teamStats.RunsFor['#text'],
  hits: teamStats.Hits['#text'],
  errors: teamStats.Errors['#text']});

const getLosingPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Losses['#text'] === '1').find(pitcher => pitcher));

const getWinningPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Wins['#text'] === '1').find(pitcher => pitcher));

const getSavingPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Saves['#text'] === '1').find(pitcher => pitcher));

const getPitchers = players => (
 players.filter(player => player.player.Position === 'P'));;

const headerRow = (
  <div className="row">
    <div className="col-lg-5">&nbsp; </div>
    <div className="col-lg-6">
      <div className="row">
        <div className="col lineupTitles">AB</div>
        <div className="col lineupTitles">R</div>
        <div className="col lineupTitles">H</div>
        <div className="col lineupTitles">BB</div>
        <div className="col lineupTitles">K</div>
        <div className="col lineupTitles">AVG</div>
      </div>
    </div>
  </div>);


const BoxScoreModal = ({ show, handleClose, gameboxscore }) => {
    const { awayTeam, homeTeam } =  gameboxscore.game;
    const { inning } = gameboxscore.inningSummary;
    const awayPlayers = gameboxscore.awayTeam.awayPlayers.playerEntry;
    const homePlayers = gameboxscore.homeTeam.homePlayers.playerEntry;
    const awayPitchers = getPitchers(awayPlayers);
    const homePitchers = getPitchers(homePlayers);
    const winner = getWinningPitcher(homePitchers) || getWinningPitcher(awayPitchers);
    const loser = getLosingPitcher(homePitchers) || getLosingPitcher(awayPitchers);
    const saver = getSavingPitcher(homePitchers) || getSavingPitcher(awayPitchers);
  return (
    <Modal
      show={show}
      onClose={handleClose}
    >
      <Fragment>
        <div className="scoreBoard">
          <div className="row">
            <div className="col-lg-1" >
              <p>&nbsp;</p>
              <p>{awayTeam.Abbreviation}</p>
              <p>{homeTeam.Abbreviation}</p>
            </div>
            <InningSummary
              summary={inning}
              awayRHE={getRHE(gameboxscore.awayTeam.awayTeamStats)}
              homeRHE={getRHE(gameboxscore.homeTeam.homeTeamStats)}
            />
          </div>
          <div className ="row">
            <PitchingSummary
              winningPitcher={winner}
              losingPitcher={loser}
              savingPitcher={saver}
            />
           </div>
           <div className = "row">
             <div className = "col-lg-6">
             <h1 className="scoreboardTeamName">{`${awayTeam.City} ${awayTeam.Name}`}</h1>
              {headerRow}
              { awayPlayers && awayPlayers.map(player =>(
                <div className ="row" key={player}>
                  <Lineup
                    playerEntry={player}
                  />
                </div>
              ))
              }
           </div>
           <div className="col-lg-6">
             <h1 className="scoreboardTeamName">{`${homeTeam.City} ${homeTeam.Name}`}</h1>
            {headerRow}
            { homePlayers && homePlayers.map(player =>(
              <div className ="row" key={player}>
                <Lineup
                  playerEntry={player}
                />
              </div>
            ))
            }
           </div>
         </div>
        </div>
      </Fragment>
    </Modal>
  );
};

BoxScoreModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  gameboxscore: PropTypes.object.isRequired,
};

BoxScoreModal.defaultProps = {
  show: false,
  handleClose: () => {},
};

export default BoxScoreModal;