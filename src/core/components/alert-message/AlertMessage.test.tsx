import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

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


describe('Shallowed Alert Message component', () => {
  let wrapped: ShallowWrapper;

  beforeEach(() => {
    wrapped = shallow(
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

  it('should contain a d-flex class name', () => {
    expect(wrapped.find('.d-flex').exists()).toBe(true);
  });

  it('should contain a justify content class name', () => {
    expect(wrapped.find('.justify-content-end').exists()).toBe(true);
  });
});
