import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBoxScores, clearBoxScores } from '../boxScores/boxScores.actions';
import '../../styles/scoreboard.css';
import TeamRow from './teamRow';
import BoxScoreModal from '../boxScores/boxScoreModal';

export const mapStateToProps = ({ boxScores }) =>
({
  gameboxscore: boxScores.gameboxscore,
});

export const mapDispatchToProps = {
  getBoxScores,
  clearBoxScores,
};

export class GameScore extends Component {
  constructor(props) {
    super(props);
    this.handleGameClick = this.handleGameClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
    this.props.clearBoxScores();
  }

  handleGameClick(date, away, home) {
    this.setState({ show: true });
    this.props.getBoxScores(`${date.split('-').join('')}-${away}-${home}`);
  }

  render() {
    const { gameInfo, gameboxscore } = this.props;
    const { awayScore, homeScore } = gameInfo;
    const { homeTeam, awayTeam, date } = gameInfo.game;
    return(
      <Fragment>
      <div className="card" onClick={event =>
        this.handleGameClick(date, awayTeam.Abbreviation, homeTeam.Abbreviation)}>
        <div className="card-body">
          <TeamRow
            city={awayTeam.City}
            score={awayScore}
            abbr={awayTeam.Abbreviation}
          />
          <TeamRow
            city={homeTeam.City}
            score={homeScore}
            abbr={homeTeam.Abbreviation}
          />
        </div>
        <br />
      </div>
      <BoxScoreModal
        show={this.state.show}
        handleClose={this.handleClose}
        gameboxscore={gameboxscore}
      />
      {/* <Modal
        show={this.state.show}
        onClose={this.handleClose}
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
                summary={gameboxscore.inningSummary.inning}
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
      </Modal> */}
        </Fragment>
      );
    }
}

GameScore.propTypes = {
  gameInfo: PropTypes.object.isRequired,
  getBoxScores: PropTypes.func.isRequired,
  gameboxscore: PropTypes.object.isRequired,
  clearBoxScores: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(GameScore);