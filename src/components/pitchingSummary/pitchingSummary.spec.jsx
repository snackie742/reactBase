import React from 'react';
import { shallow } from 'enzyme';
import PitchingSummary from './pitchingSummary';

const defaultProps = {
    winningPitcher: { player: { FirstName: 'Winning', LastName: 'Pitcher'}},
    losingPitcher: { player: { FirstName: 'Losing', LastName: 'Pitcher'}},
    savingPitcher: { player: { FirstName: 'Saving', LastName: 'Pitcher'}},

};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<PitchingSummary {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('PitchingSummary', () => {
  describe('<PitchingSummary/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected with save', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
      test('renders as expected with without save', () => {
        const propOverrides = {
          winningPitcher: { player: { FirstName: 'Winning', LastName: 'Pitcher'}},
          losingPitcher: { player: { FirstName: 'Losing', LastName: 'Pitcher'}},
        };
        const { wrapper } = setup(propOverrides);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
