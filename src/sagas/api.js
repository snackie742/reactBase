import axios from 'axios';
import { call } from 'redux-saga/effects';

const headers = {
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  Authorization: 'Basic MTU4ZmZmOGItODNkZi00MTNhLWJlODAtOTg0NTVjOjdkMHQ1NzBu',
  // credentials: 'same-origin',
  Accept: 'application/json',
};

const getGames = {
  getGames: (date) => (
    call(axios.get, `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=${date}`, { headers })
  ),
};

const getScores = {
  getScores: (date) => (
    call(axios.get, `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/scoreboard.json?fordate=${date}`, { headers })
  ),
};

const getBoxScores = {
  getBoxScores: (gameId) => (
    call(axios.get, `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/game_boxscore.json?gameid=${gameId}`, { headers })
  ),
};
const api = {
  getGames,
  getScores,
  getBoxScores,
};

export default api;