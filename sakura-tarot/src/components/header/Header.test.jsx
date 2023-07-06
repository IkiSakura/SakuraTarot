import React from 'react';
import { beforeEach, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import  '@testing-library/jest-dom/extend-expect';
import Header from './Header';



describe('Component Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
       <Header />
      </MemoryRouter>
    );
  });

  test('should render the Logo', () => {
    const imgLogo = screen.getByAltText("Logo Ikisakura");
    expect(imgLogo).toBeInTheDocument();
  });

  test('should have the correct alt text for the image', () => {
    const imgLogo = screen.getByRole('img', { className: "img-logo"});
    expect(imgLogo).toHaveAttribute('alt', "Logo Ikisakura");
  });

  test('should print Ikisakura text', () => {
    expect(screen.getByText('Ikisakura')).toBeDefined();
  });

  test('should print Mis Lecturas text', () => {
    expect(screen.getByText('Mis Lecturas')).toBeDefined();
  });

  test('check click event Link Ikisakura', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    test('should render the Ikisakura link with the correct path', () => {
      const IkisakuraLink = screen.getByText('Ikisakura');
      fireEvent.click(IkisakuraLink[0]);

      expect(IkisakuraLink.length).toBeGreaterThan(0);
      expect(IkisakuraLink).toHaveAttribute('to', '/Home');
      expect(IkisakuraLink.location.pathname).toBe("/Home");
    });

              
      });

      test('check click event Link Mis Lecturas', () => {
        const history = createMemoryHistory();
        render(
          <Router history={history}>
            <Header />
          </Router>
        );

        test('should render the Mis Lecturas link with the correct path', () => {
          const myReadingsLink = screen.getByText('Mis Lecturas');
          fireEvent.click(myReadingsLink[0]);
    
          expect(myReadingsLink.length).toBeGreaterThan(0);
          expect(myReadingsLink).toHaveAttribute('to', '/Journal');
          expect(myReadingsLink.location.pathname).toBe("/Journal");
        });
                  
          });

      });

