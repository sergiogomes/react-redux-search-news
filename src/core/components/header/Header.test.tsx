import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';

import Header from './Header';
import ReduxProvider from '../../../reduxProvider';

describe('Mounted Header component', () => {
  let wrapped: ReactWrapper;

  beforeEach(() => {
    wrapped = mount(
      <ReduxProvider>
        <Router>
          <Header />
        </Router>
      </ReduxProvider>,
    );
  });

  it('should contain the title React News', () => {
    const title = 'React News';
    expect(wrapped.render().text()).toContain(title);
  });
});
