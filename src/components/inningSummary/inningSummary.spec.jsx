import React from 'react';
import { shallow } from 'enzyme';
import InningSummary from './inningSummary';

const defaultProps = {
    summary:[
        {'@number': '1', awayScore: '0', homeScore: '0'},
        {'@number': '2', awayScore: '0', homeScore: '0'},
        {'@number': '3', awayScore: '0', homeScore: '0'},
        {'@number': '4', awayScore: '0', homeScore: '0'},
        {'@number': '5', awayScore: '0', homeScore: '0'},
        {'@number': '6', awayScore: '0', homeScore: '0'},
        {'@number': '7', awayScore: '0', homeScore: '0'},
        {'@number': '8', awayScore: '0', homeScore: '0'},
        {'@number': '9', awayScore: '1', homeScore: '0'},
    ],
    awayRHE:{ runs: '1', hits: '4', errors: '0'},
    homeRHE:{ runs: '0', hits: '3', errors: '1'},
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<InningSummary {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('InningSummary', () => {
  describe('<InningSummary/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected no dash', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
      test('renders as expected dash', () => {
        const propOverrides = {
            summary:[
                {'@number': '1', awayScore: '0', homeScore: '0'},
                {'@number': '2', awayScore: '0', homeScore: '0'},
                {'@number': '3', awayScore: '0', homeScore: '0'},
                {'@number': '4', awayScore: '0', homeScore: '0'},
                {'@number': '5', awayScore: '0', homeScore: '0'},
                {'@number': '6', awayScore: '0', homeScore: '0'},
                {'@number': '7', awayScore: '0', homeScore: '0'},
                {'@number': '8', awayScore: '0', homeScore: '1'},
                {'@number': '9', awayScore: '0', homeScore: '0'},
            ],
            awayRHE:{ runs: '0', hits: '4', errors: '0'},
            homeRHE:{ runs: '1', hits: '3', errors: '1'},
        };
        const { wrapper } = setup(propOverrides);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

