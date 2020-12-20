import React from 'react';
import { mount, shallow } from 'enzyme';

import Home from './Home';

it('should contain a Home Page title', () => {
  const wrapped = mount(<Home />);
  expect(wrapped.render().text()).toContain('Home Page');
});

it('should contain a lead class name', () => {
  const wrapped = shallow(<Home />);
  expect(wrapped.find('.lead').exists()).toBe(true)
});
