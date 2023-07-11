import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/home/Home';

describe('Component Home', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test('should render the corner image', () => {

    const cornerImg = screen.getByAltText("Footer Image");
    expect(cornerImg).toBeInTheDocument();

  });

});