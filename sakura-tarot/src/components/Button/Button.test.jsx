import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Button from './Button';
import { expect } from 'chai';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';
import jest from 'jest';

describe ('Component Button', () => {
  it('renders button with correct text and link', () => {
    const text = 'Ver mi lectura';
    const to = '/reading';

    const { getByText } = render(
      <MemoryRouter>
        <Button text={text} to={to} />
      </MemoryRouter>
    );

    const button = getByText(text);
    expect(button).toBeInTheDocument();
    expect(button.getAttribute(to)).toBe('/reading');
  });

  it('calls onClick function when button is clicked', () => {
    const text = 'Click me';
    const onClick = jest.fn();

    const { getByText } = render(
      <Button text={text} onClick={onClick} />
    );

    const button = getByText(text);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with correct text and link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Button text='Ver mi lectura' to='/reading' />
      </Router>
    );

    const ButtonLink = screen.getByText('Ver mi lectura');
    fireEvent.click(ButtonLink[0]);

    expect(ButtonLink.getAttribute('text')).toEqual('Ver mi lectura');
    expect(ButtonLink.getAttribute('to')).toEqual('/reading');
    expect(ButtonLink.location.pathname).toBe("/reading");
  });
});

