import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Component Modal', () => {
  beforeEach(() => {
    render(<Modal />);
  });


  test ('close modal button renders correctly', () => {


    
  })
  test('text submission', () => {
    expect(screen.getByRole('button', {text: "Guardar en mis lecturas"})).toBeDefined();
  });

  test('submit elements', () => {
    const modalButton = screen.getByRole('button', {text: "Guardar en mis lecturas"});
    fireEvent.click(modalButton);

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
  });

  test('submit text from "pensamientos" with string', () => {
    const textInput = screen.getByRole('textarea');
    
    fireEvent.change(textInput, { target: { value: 'Me siento esperanzada' } });
    fireEvent.click(screen.getByRole('button', { text: "Guardar en mis lecturas" }));

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
    expect(textInput.value).toBe('');
    
  });

  
  test('should render the Kerobero image', () => {
    const imgKerobero = screen.getByAltText("mascota sakura kerobero");
    expect(imgKerobero).toBeInTheDocument();
  });

  test('should have the correct alt text for the kerobero image', () => {
    const imgKerobero = screen.getByRole('img', { className:"kinomoto-modal" });
    expect(imgKerobero).toHaveAttribute('alt', "mascota sakura kerobero");
  });

});
