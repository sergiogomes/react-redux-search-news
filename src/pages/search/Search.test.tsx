import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history'

import Search from './Search';
import ReduxProvider from '../../reduxProvider';

it('should contain a Search Page title', () => {
  const history = createMemoryHistory()
  const wrapped = mount(<ReduxProvider><Search history={history} /></ReduxProvider>);
  expect(wrapped.render().text()).toContain('Search Page');
});
