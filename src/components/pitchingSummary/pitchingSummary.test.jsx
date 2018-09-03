import React from 'react';
import { shallow } from 'enzyme';
import PitchingSummary from './pitchingSummary';

const defaultProps = {
    winningPitcher: 'Winner',
    losingPitcher: 'Loser',
    savingPitcher: '',
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
      test('renders as expected', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
