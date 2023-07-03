import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button'
{/*import { MemoryRouter } from 'react-router-dom';*/}

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe ('texto dentro de componente Button', ()=> {
    test('boton contiene un string', () => {
      const { getByText } = render(<Button />)
      const buttonText = getByText('Ver mi lectura')
      expect(buttonText).toBeInTheDocument()
    })
    });