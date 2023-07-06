import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
/*import { MemoryRouter } from 'react-router-dom';*/
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {expect, toBeInTheDocument} from 'chai';
import Modal from './Modal';

describe('Component Modal', () => {
  beforeEach(() => {
    render(
      <Router>
        <Modal />
      </Router>
    );
  });

  test('close modal button renders correctly', () => {
    const iconButton = screen.getByAltText("icono de cerrar");

    expect(iconButton).toHaveAttribute('src', "icon-close.svg");
    expect(iconButton).toBeInTheDocument();
  });

  test('Modal icon should have the correct icon and alt text ', () => {
    const iconButton = screen.getByClass("close-img");

    expect(iconButton).toHaveAttribute('src', "icon-close.svg");
    expect(iconButton).toHaveAttribute('alt', "icono de cerrar");
  });

  test('boton guardar', () => {
    expect(screen.getByText("Guardar en mis lecturas")).toBeDefined();
  });

  test('submit elements', () => {
    const modalButton = screen.getByText("Guardar en mis lecturas")
    fireEvent.click(modalButton);

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
  });

  test('should render correctly the kerobero image', () => {
    const imgKerobero = screen.getByAltText("mascota sakura kerobero");

    expect(imgKerobero).toBeInTheDocument();
    expect(imgKerobero).toHaveAttribute('alt', "mascota sakura kerobero");
  });

  test('updates thoughts state when typing in the textarea', () => {
    const { getByPlaceholderText } = render(<Modal />);
    const textarea = getByPlaceholderText('Escribe aquí tus pensamientos...');

    fireEvent.change(textarea, { target: { value: 'Nuevo pensamiento' } });

    expect(textarea.value).toBe('Nuevo pensamiento');
  });

  test('submit text from "pensamientos" with string', () => {
    const textInput = screen.getByRole('textarea');

    fireEvent.change(textInput, { target: { value: 'Me siento esperanzada' } });
    fireEvent.click(screen.getByText("Guardar en mis lecturas"));

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
    expect(textInput.value).toBe('');
  });
});

