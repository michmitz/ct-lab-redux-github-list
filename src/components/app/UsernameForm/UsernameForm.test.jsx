import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UsernameForm from './UsernameForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('UsernameForm component', () => {
  afterEach(() => cleanup());
  it('renders UsernameForm', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <UsernameForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});