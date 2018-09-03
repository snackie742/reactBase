import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBoxScores, clearBoxScores } from '../boxScores/boxScores.actions';
import TeamRow from './teamRow';
import BoxScoreModal from '../boxScores/boxScoreModal';
import '../../styles/scoreboard.css';

export const mapStateToProps = ({ boxScores }) =>
({
  gameboxscore: boxScores.gameboxscore,
  boxScoreLoading: boxScores.loading,
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
      </Fragment>
      );
    }
}

GameScore.propTypes = {
  gameInfo: PropTypes.object.isRequired,
  getBoxScores: PropTypes.func.isRequired,
  gameboxscore: PropTypes.object.isRequired,
  clearBoxScores: PropTypes.func.isRequired,
  boxScoreLoading: PropTypes.bool,
};

GameScore.defaultProps = {
  boxScoreLoading: false,
};


export default connect(mapStateToProps, mapDispatchToProps)(GameScore);