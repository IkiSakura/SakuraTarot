import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Component Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  test('should render the corner image', () => {

    const cornerImg = screen.getByAltText("Footer Image");
    expect(cornerImg).toBeInTheDocument();

  });

});