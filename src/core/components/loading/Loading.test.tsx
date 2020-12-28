import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import Loading from './Loading';
import ReduxProvider from '../../../reduxProvider';

describe('Mounted Loading component', () => {
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

  afterAll(() => wrapped.unmount());
});

describe('Shallowed Loading component', () => {
  let wrapped: ShallowWrapper;

  beforeEach(() => {
    wrapped = shallow(
      <ReduxProvider>
        <Loading />
      </ReduxProvider>
    );
  });

  it('should contain a Loading component', () => {
    expect(wrapped.find(Loading)).toHaveLength(1);
  });

  afterAll(() => wrapped.unmount());
});
