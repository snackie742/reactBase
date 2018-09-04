import { BOX_SCORE_ACTIONS } from './boxScores.actions';

export const initalGameBoxScore = {
    inningSummary:{
      inning:[],
    },
};

export const inintialStats = {
  Hits: {},
  Errors: {},
  RunsFor: {},
};
export const initialPlayerEntry = {
  player: {
    position: '',
    FirstName: '',
    LastName: '',
  },
};
export const initialState = {
  loading: false,
  gameboxscore: {
    ...initalGameBoxScore,
    awayTeam:{
      awayTeamStats: {
      ...inintialStats,
      },
      awayPlayers: {
        playerEntry: [{...initialPlayerEntry}],
      },
    },
    homeTeam: {
      homeTeamStats: {
        ...inintialStats,
      },
      homePlayers: {
        playerEntry: [{...initialPlayerEntry}],
      },
    },
    game: { 
      awayTeam: { City: '', Abbbreviation: '', Name: ''},
      homeTeam: { City: '', Abbbreviation: '', Name: ''},

    },
  },
};

export default function reducer(state = initialState, action) {
  const { type, data, errorMessage } = action;
  switch(type) {
    case BOX_SCORE_ACTIONS.FETCH_BOX_SCORES:
      return {
        ...state,
        loading: true,
  };
    case BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_SUCCESS:
      return {
        ...state,
        ...data,
        loading: false,
      };
    case BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_FAILURE:
      return {
        ...state,
        errorMessage,
        loading: false,
      };
    case BOX_SCORE_ACTIONS.CLEAR_BOX_SCORES:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
}