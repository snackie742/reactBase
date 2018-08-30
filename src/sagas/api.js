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
  getGames: () => (
    call(axios.get, 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=20180829', { headers })
  ),
};

const api = {
  getGames,
};

export default api;