import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('renders header component', () => {
  const { getByText } = render(<Header />);

  expect(getByText(/React News/i)).toBeInTheDocument();
});
