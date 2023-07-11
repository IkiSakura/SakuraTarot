import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardsContainer from '../CardsContainer/CardsContainer'



describe('Component Card Container', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CardsContainer />
      </MemoryRouter>
    );
  });

  

describe('CardContainer component', () => {
  
  test('renders reverse image when clickCount is greater than or equal to 1', () => {
    const clickCount = 1;
    const reverseImageUrl = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg"

    const { getByAltText } = render(
      <CardsContainer clickCount={clickCount} reverseImageUrl={reverseImageUrl} />
    );

    const reverseImage = getByAltText('Reverso carta de tarot sakura');
    expect(reverseImage).toBeInTheDocument();
    expect(reverseImage.getAttribute('src')).toBe(reverseImageUrl);
  });


});
})

