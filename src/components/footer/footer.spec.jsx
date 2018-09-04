import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

const defaultProps = {
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<Footer {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('Footer', () => {
  describe('<Footer/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

