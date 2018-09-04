/* eslint import/no-extraneous-dependencies: 0 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Make Enzyme functions available in all test files without importing
const { shallow, render, mount } = Enzyme;

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};

Enzyme.configure({ adapter: new Adapter() });
