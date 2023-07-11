import React from 'react';
import { render, screen } from '@testing-library/react';
/*import { MemoryRouter } from 'react-router-dom';*/
import { BrowserRouter as Router } from 'react-router-dom';
import Principal from './Principal';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import {expect} from 'chai';
import Button from '../../components/Button/Button';

describe('Component Principal', () => {
  beforeEach(() => {
    render(
      <Router>
        <Principal />
      </Router>
    );
  });
  
  test('should render the Logo Image', () => {

    const LogoImg = screen.getByAltText("Portada Ikisaura Image");
    expect(LogoImg).toBeInTheDocument();

  });


  test('check click event Inicia tu lectura Button', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Button text='Inicia tu lectura de hoy' to='/home' />
      </Router>
    );

  test('should render the "Inicia tu lectura" Button with the correct path', () => {

    const startButton = screen.getByText('Inicia tu lectura de hoy');
    expect(startButton).toBeInTheDocument();
    fireEvent.click(startButton[0]);

    expect(startButton.length).toBeGreaterThan(0);
    expect(startButton).toHaveAttribute('to', '/Home');
    expect(startButton.location.pathname).toBe("/Home");

  });

            
    });
  })