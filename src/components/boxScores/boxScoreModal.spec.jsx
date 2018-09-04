import React from 'react';
import { shallow } from 'enzyme';
import BoxScoreModal, {
    getRHE,
    getLosingPitcher,
    getWinningPitcher,
    getSavingPitcher,
    getPitchers,
     } from './boxScoreModal';

// const defaultProps = {
//     gameboxscore: {
//         game:{
//             awayTeam:{ },
//             homeTeam:{ },
//         },
//         inningSummary: {
//             inning: [],
//         },
//         awayTeam:{
//             awayPlayers:{
//                 playerEntry:[
//                     { player: { Position: "P" }},
//                     { player: { Position: "C" }},
//                 ],
//             },
//         },
//         homeTeam:{
//             homePlayers:{
//                 playerEntry:{ },
//             },
//         },
//     },
// };

// const setup = (propOverrides) => {
//   const props = Object.assign({}, defaultProps, propOverrides);
//   const wrapper = shallow(<BoxScoreModal {...props} />);
//   const component = wrapper.instance();
//   return { wrapper, component };
// };

// describe('boxScoreModal', () => {
//   describe('<BoxScoreModal/>', () => {
//     describe('(Snapshot)', () => {
//       test('renders as expected', () => {
//         const { wrapper } = setup(defaultProps);
//         expect(wrapper).toMatchSnapshot();
//       });
//     });
//   });
// });

describe('getRHE tests', () => {
    test('return Runs, Hits and Errors', () => {
        const stats = {
            RunsFor: {
                '#text': 2,
            },
            Hits: {
                '#text': 4,
            },
            Errors: {
                '#text': 1,
            },
        };
        const expected = {
            runs: 2,
            hits: 4,
            errors: 1,
        };
        expect(getRHE(stats)).toEqual(expected);
    });
});

describe('getLosingPitcher tests', () => {
    test('return losing pitcher', () => {
        const players = [{
            player: {
                FirstName: 'Losing',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Losses: {
                },
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Losses: {
                },
            },
        }];
        players[0].stats.Losses['#text'] = '1';
        players[1].stats.Losses['#text'] = '0';
        const expected = {
            player: {
                FirstName: 'Losing',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Losses: {
                    '#text': '1',
                },
            },
        };
        expect(getLosingPitcher(players)).toEqual(expected);
    });
});

describe('getWinningPitcher tests', () => {
    test('return winning pitcher', () => {
        const players = [{
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Wins: {
                },
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Wins: {
                },
            },
        }];
        players[0].stats.Wins['#text'] = '1';
        players[1].stats.Wins['#text'] = '0';
        const expected = {
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Wins: {
                    '#text': '1',
                },
            },
        };
        expect(getWinningPitcher(players)).toEqual(expected);
    });
});

describe('getSavingPitcher tests', () => {
    test('return saving pitcher', () => {
        const players = [{
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Wins: {
                },
                Saves:{
                }
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Saves: {
                },
            },
        }];
        players[0].stats.Wins['#text'] = '1';
        players[0].stats.Saves['#text'] = '0';
        players[1].stats.Saves['#text'] = '1';
        const expected = {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Saves: {
                    '#text': '1',
                },
            },
        };
        expect(getSavingPitcher(players)).toEqual(expected);
    });
        test('return undefined', () => {
        const players = [{
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Wins: {
                },
                Saves:{
                }
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
            stats: {
                Saves: {
                },
            },
        }];
        players[0].stats.Wins['#text'] = '1';
        players[0].stats.Saves['#text'] = '0';
        players[1].stats.Saves['#text'] = '0';
        const expected = undefined;
        expect(getSavingPitcher(players)).toEqual(expected);
    });
});

describe('getPitcher tests', () => {
    test('return pitchers', () => {
        const players = [
        {
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
        },
        {
            player: {
                FirstName: 'First',
                LastName: 'Baseman',
                Position: '1B',
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
        }];
        const expected = [{
            player: {
                FirstName: 'Winning',
                LastName: 'Pitcher',
                Position: 'P',
            },
        },
        {
            player: {
                FirstName: 'Relief',
                LastName: 'Pitcher',
                Position: 'P',
            },
        }];
        expect(getPitchers(players)).toEqual(expected);
    });
});