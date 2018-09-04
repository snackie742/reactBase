import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/modal';
import InningSummary from '../inningSummary/inningSummary';
import PitchingSummary from '../pitchingSummary/pitchingSummary';
import Lineup from '../lineup/lineup';
import Loader from 'react-loader';

export const getRHE = teamStats => ({
  runs: teamStats.RunsFor['#text'],
  hits: teamStats.Hits['#text'],
  errors: teamStats.Errors['#text']});

export const getLosingPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Losses['#text'] === '1').find(pitcher => pitcher));

export const getWinningPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Wins['#text'] === '1').find(pitcher => pitcher));

export const getSavingPitcher = pitchers => (pitchers.filter(pitcher =>
  pitcher.stats.Saves['#text'] === '1').find(pitcher => pitcher));

export const getPitchers = players => (
 players.filter(player => player.player.Position === 'P'));;

const headerRow = (
      <div className="col-lg lineupCard" >
        <div className="row staticRow">
          <div className="col-lg-5 col-sm-1">&nbsp; </div>
          <div className="col-lg-6 col-sm-7">
            <div className="row">
              <div className="col lineupEntry lineupHeader lineupAB">AB</div>
              <div className="col lineupEntry lineupHeader lineupRuns">R</div>
              <div className="col lineupEntry lineupHeader">H</div>
              <div className="col lineupEntry lineupHeader lineupWalks">BB</div>
              <div className="col lineupEntry lineupHeader lineupKs">K</div>
              <div className="col lineupEntry lineupHeader lineupAvg">Avg</div>
            </div>
         </div>
        </div>
      </div>
);
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
    <Loader
      loaded={inning.length > 0}
      color={'#fff'}
    >
        <Fragment>
          <div className="scoreBoard">
            <div className="row">
              <div className="col-sm-1" >
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
              <div className = "col-sm-6">
              <h1 className="scoreboardTeamName">{`${awayTeam.City} ${awayTeam.Name}`}</h1>
                {headerRow}
                {awayPlayers && awayPlayers.map((player, index) =>(
                  <div className ="row" key={index}>
                    <Lineup
                      playerEntry={player}
                    />
                  </div>
                ))
                }
            </div>
            <div className="col-sm-6">
              <h1 className="scoreboardTeamName">{`${homeTeam.City} ${homeTeam.Name}`}</h1>
              {headerRow}
              {homePlayers && homePlayers.map((player, index) =>(
                <div className ="row" key={index}>
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
    </Loader>
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