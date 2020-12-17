import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Paging from './Paging';

const page = 1;
const results = 100;
const handleChangePage = () => console.log('Page changed!');

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <Paging
      page={page}
      results={results}
      changePage={handleChangePage}
    />
  );
});

it('should contain a pagination of 1, 2 and 3', () => {
  expect(wrapped.render().text()).toContain(page);
  expect(wrapped.render().text()).toContain(page + 1);
  expect(wrapped.render().text()).toContain(page + 2);
});
