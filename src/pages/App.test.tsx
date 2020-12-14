import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import App from './App';
import ReduxProvider from '../reduxProvider';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <App />
    </ReduxProvider>,
  );
});

it('should contain the title React News', () => {
  const title = 'React News';
  expect(wrapped.render().text()).toContain(title);
});
