import React from 'react';
import { shallow } from 'enzyme';
import TeamRow from './teamRow';

const defaultProps = {
    city: 'St. Louis',
    score: '3',
    abbr: 'STL',
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<TeamRow {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('TeamRow', () => {
  describe('<TeamRow/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected with score', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
      test('renders as expected with time', () => {
        const propOverrides = {
            city: 'STL',
            abbr: 'STL',
            time: '1:00 PM',
        };
        const { wrapper } = setup(propOverrides);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});


