import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import AlertMessage from './AlertMessage';

const show = true;
const title = 'Alert!';
const variant = 'info';
const message = 'Testing alert message.';
const actionTitle = 'Click me!';
const handleAction = () => console.log('Button clicked!');

describe('Mounted Alert Message component', () => {
  let wrapped: ReactWrapper;

  beforeEach(() => {
    wrapped = mount(
      <AlertMessage
        variant={variant}
        show={show}
        message={message}
        title={title}
        action={handleAction}
        actionTitle={actionTitle}
      />
    );
  });

  it('should contain a alert message with a title Alert!', () => {
    expect(wrapped.render().text()).toContain(title);
  });

  it('should contain a alert message with a message Testing alert message.', () => {
    expect(wrapped.render().text()).toContain(message);
  });

  it('should contain a alert message with a button Click me!', () => {
    expect(wrapped.render().text()).toContain(actionTitle);
  });

});
