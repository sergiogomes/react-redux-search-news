import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Loading from './Loading';
import ReduxProvider from '../../../reduxProvider';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <Loading />
    </ReduxProvider>,
  );
});

it('should contain the text wait a moment', () => {
  const text = 'Wait just a moment...';
  expect(wrapped.render().text()).toContain(text);
});
