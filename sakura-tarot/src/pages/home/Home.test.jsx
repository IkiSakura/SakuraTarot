import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';



describe('Component Home', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });
  

test('increments clickCount when maxClicks is not reached', () => {
  const maxClicks = 3;
  let clickCount = 0;
  const setClickCount = jest.fn((newClickCount) => {
    clickCount = newClickCount;
  });

  const handleCardClick = () => {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + 1);
    }
  };

  const { getByTestId } = render(
    <button onClick={handleCardClick} data-testid="card-button">
      Click me
    </button>
  );

  const cardButton = getByTestId('card-button');

  fireEvent.click(cardButton);
  expect(clickCount).toBe(1);
  expect(setClickCount).toHaveBeenCalledWith(1);

  fireEvent.click(cardButton);
  expect(clickCount).toBe(2);
  expect(setClickCount).toHaveBeenCalledWith(2);

  fireEvent.click(cardButton);
  expect(clickCount).toBe(3);
  expect(setClickCount).toHaveBeenCalledWith(3);

  fireEvent.click(cardButton);
  expect(clickCount).toBe(3);
  expect(setClickCount).not.toHaveBeenCalledWith(4);
});
})