import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Home from './Home';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <Home />
  );
});

it('should contain a Home Page title', () => {
  const title = 'Home Page';
  expect(wrapped.render().text()).toContain(title);
});
