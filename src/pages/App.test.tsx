import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { store } from '../app/store';
import App from './App';

test('renders the App', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/React/i)).toBeInTheDocument();
});
