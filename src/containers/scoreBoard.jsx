import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../components/dailyGames/dailyGames.actions';
import { getScores } from '../components/gameScores/gameScores.actions';
import GameScore from '../components/gameScores/gameScores';

export const mapStateToProps = ({ dailyGames, gameScores }) =>
({
  dailygameschedule: dailyGames.dailygameschedule,
  scoreboard: gameScores.scoreboard,
});
export const mapDispatchToProps = {
  getGames,
  getScores,
};

export class ScoreBoard extends Component {
  componentWillMount(){
    this.props.getGames('20180829');
    this.props.getScores('20180829');
  }
  render(){
    console.log(this.props.dailygameschedule);
    console.log(this.props.scoreboard);
    const { gameScore } = this.props.scoreboard;
    return(
      <div className="container-fluid">
        <div className="row">
            { gameScore && gameScore.map(game => (
                <div className="col-lg-6" key={game.game.ID}>
                  <GameScore
                    away={game.game.awayTeam}
                    awayScore={game.awayScore}
                    home={game.game.homeTeam}
                    homeScore={game.homeScore}
                  />
                </div>
              ))
            }
        </div>
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  getGames: PropTypes.func.isRequired,
  dailygameschedule: PropTypes.object,
  scoreboard: PropTypes.object,
};
ScoreBoard.defaultProps = {
  dailygameschedule: {},
  scoreboard: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);