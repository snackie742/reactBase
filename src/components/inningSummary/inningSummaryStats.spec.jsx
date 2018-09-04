import React from 'react';
import { shallow } from 'enzyme';
import InningSummaryStats from './inningSummaryStats';

const defaultProps = {
    className: 'testClass',
    awayValue: '3',
    homeValue: '4',
    statAbbr: 'H',
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<InningSummaryStats {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('InningSummaryStats', () => {
  describe('<InningSummaryStats/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
