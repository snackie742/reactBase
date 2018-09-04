import reducer, { initialState } from './boxScores.reducer';
import { BOX_SCORE_ACTIONS } from './boxScores.actions';

describe('boxScore reducer', () => {
    describe('FETCH_BOX_SCORES', () => {
        it('start with initialState', () => {
          const action = {
            type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES,
          };
          const expectedState = initialState;
          expectedState.loading = true;
          const result = reducer(initialState, action);
          expect(result).toEqual(expectedState);
        });
    });
    describe('FETCH_BOX_SCORES_FAILURE', () => {
        it('start with initialState', () => {
          const action = {
            type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_FAILURE,
            errorMessage: 'Data not loaded',
          };
          const expectedState = initialState;
          expectedState.loading = false;
          expectedState.errorMessage = 'Data not loaded';
          const result = reducer(initialState, action);
          expect(result).toEqual(expectedState);
        });
    });
    describe('FETCH_BOX_SCORES_SUCCESS', () => {
        it('start with initialState', () => {
        const loadedGameBoxScore = {
            inningSummary:{
            inning:[{ number: 1, awayScore: 2, homeScore: 0 }],
            },
        };
        const loadedStats = {
            Hits: { '#text': 2 },
            Errors: { '#text': 0 },
            RunsFor: { '#text': 0 },
        };
        const loadedPlayerEntry = {
            player: {
                position: '1B',
                FirstName: 'First',
                LastName: 'Baseman',
            },
        };
        const loadedState = {
        loading: false,
        errorMessage: '',
        gameboxscore: {
            ...loadedGameBoxScore,
            awayTeam:{
            awayTeamStats: {
            ...loadedStats,
            },
            awayPlayers: {
                playerEntry: [{...loadedPlayerEntry}],
            },
            },
            homeTeam: {
            homeTeamStats: {
                ...loadedStats,
            },
            homePlayers: {
                playerEntry: [{...loadedPlayerEntry}],
            },
            },
            game: { 
            awayTeam: { City: 'Away', Abbbreviation: 'AWA', Name: 'Team'},
            homeTeam: { City: 'Home', Abbbreviation: 'HOM', Name: 'Team'},
            },
        },
        };
          const action = {
            type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_SUCCESS,
            data: loadedState,
          };
          initialState.errorMessage = '';
          const result = reducer(initialState, action);
          expect(result).toEqual(loadedState);
        });
    });
});