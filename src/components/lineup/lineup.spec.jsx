import React from 'react';
import { shallow } from 'enzyme';
import Lineup from './lineup';

const defaultProps = {
    playerEntry: {
        player: { FirstName: 'Player', LastName: 'LastName'},
        stats: {
            AtBats: {},
            Runs: {},
            Hits: {},
            BatterWalks: {},
            BatterStrikeouts: {},
            BattingAvg: {},
        },
    },
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<Lineup {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('Lineup', () => {
  describe('<Lineup/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected', () => {
          defaultProps.playerEntry.stats.AtBats['#text'] = '4';
          defaultProps.playerEntry.stats.Runs['#text'] = '2';
          defaultProps.playerEntry.stats.Hits['#text'] = '3';
          defaultProps.playerEntry.stats.BatterWalks['#text'] = '0';
          defaultProps.playerEntry.stats.BatterStrikeouts['#text'] = '1';
          defaultProps.playerEntry.stats.BattingAvg['#text'] = '0.750';
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
