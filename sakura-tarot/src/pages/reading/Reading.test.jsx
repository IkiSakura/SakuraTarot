
import React from 'react';
import { beforeEach, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import {createMemoryHistory} from 'history';
import  '@testing-library/jest-dom/extend-expect';
import Reading from './Reading';


describe('Component Reading', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Reading />
      </MemoryRouter>
    );
  });

  /*test('should render the Golden circle image correctly', () => {
    const goldCircle = screen.getByAltText("Sakura golden card circle");
    expect(goldCircle).toBeInTheDocument();
  });*/

  test('should render the save Button Guardar', () => {
    const saveButton = screen.getByText('Guardar');
    expect(saveButton).toBeInTheDocument();
  });
/*
  test('submit elements', () => {
    const saveButton = screen.getByText('Guardar');
    fireEvent.click(saveButton[0]);

    expect(saveButtonButton).toHaveAttribute('onClick', `${handleOpenModal}`);
    expect(screen.getByText('Pensamiento guardado correctamente.')).toBeTruthy();
  });*/
});

  
  