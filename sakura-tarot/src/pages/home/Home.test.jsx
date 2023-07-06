import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Home from './Home'
import '@testing-library/jest-dom/extend-expect';
import { beforeEach, expect } from "vitest"
import Button from '../../components/Button/Button';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';




describe('Component Home', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  test('check click event de "ver mi lectura" Button', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Button text='Ver mi lectura' to='/reading' />
      </Router>
    );

  test('should render the "ver mi lectura" Button with the correct path', () => {

    const showReadingBtn = screen.getByText('Ver mi lectura');
    expect(showReadingBtn).toBeInTheDocument();
    fireEvent.click(showReadingBtn[0]);

    expect(showReadingBtn.length).toBeGreaterThan(0);
    expect(showReadingBtn).toHaveAttribute('to', '/reading');
    expect(startButton.location.pathname).toBe("/reading");

  });
})
})