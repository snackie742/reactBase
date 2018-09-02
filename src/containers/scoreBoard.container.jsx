import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../components/dailyGames/dailyGames.actions';
import { getScores } from '../components/gameScores/gameScores.actions';
import GameScore from '../components/gameScores/gameScores';
import moment from 'moment';

export const mapStateToProps = ({ dailyGames, gameScores }) =>
({
  dailygameschedule: dailyGames.dailygameschedule,
  scoreboard: gameScores.scoreboard,
});
export const mapDispatchToProps = {
  getGames,
  getScores,
};

const yesterday = new Date();
export class ScoreBoard extends Component {
  componentDidMount(){
    yesterday.setDate(yesterday.getDate() - 1);
    this.props.getGames(moment().format('YYYYMMDD'));
    this.props.getScores(moment(yesterday).format('YYYYMMDD'));
  }
  
  render(){
    const { gameScore } = this.props.scoreboard;
    return(
      <Fragment>
        <h1>Scores for {moment(yesterday).format('MMMM D, YYYY')}</h1>
        <hr />
        <div className="row">
          { gameScore && gameScore.map(game => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={game.game.ID}>
              <GameScore
                gameInfo={game}
              />
            </div>
          ))
          }
        </div>
      </Fragment>
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