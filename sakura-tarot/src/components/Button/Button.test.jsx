import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import {createMemoryHistory} from 'history';
import Button from './Button'
//import { MemoryRouter } from 'react-router-dom';
import  '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router-dom';

describe('Component Button', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Button />
      </MemoryRouter>
    );
  });

test('renders button with correct link', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Button text='Ver mi lectura' to='/reading'/>
    </Router>
  );

  const LinkButton = screen.getByRole('button')
  fireEvent.click(LinkButton[0]);

  expect(ButtonLink.getAttribute('text')).to.equal('Ver mi lectura');
  expect(ButtonLink.getAttribute('to')).to.equal('/reading');
  expect(ButtonLink.location.pathname).toBe("/reading");
});
})