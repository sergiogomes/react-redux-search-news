import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import App from './App';
import ReduxProvider from '../reduxProvider';

describe('Mounted App component', () => {
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
});

describe('Shallowed App component', () => {
  let wrapped: ShallowWrapper;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('should contain an App class name', () => {
    expect(wrapped.find('.App').exists()).toBe(true);
  });
});
