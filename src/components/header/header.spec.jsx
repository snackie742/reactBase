import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const defaultProps = {
};

const setup = (propOverrides) => {
  const props = Object.assign({}, defaultProps, propOverrides);
  const wrapper = shallow(<Header {...props} />);
  const component = wrapper.instance();
  return { wrapper, component };
};

describe('Header', () => {
  describe('<Header/>', () => {
    describe('(Snapshot)', () => {
      test('renders as expected', () => {
        const { wrapper } = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

