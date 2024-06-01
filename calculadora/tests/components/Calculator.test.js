import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../src/components/Calculator';

describe('Calculator Component', () => {
  test('displays the correct initial display value', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('0');
  });

  test('number button click updates the display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('1');
  });

  test('addition operation works correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('5');
  });

  test('handles max character limit', () => {
    render(<Calculator />);
    // Simular clics para ingresar exactamente 9 caracteres
    '123456789'.split('').forEach(num => {
        fireEvent.click(screen.getByRole('button', { name: num }));
    });
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('123456789'); // Verificar que aún no se muestra ERROR

});


  test('decimal point works correctly and prevents multiple decimals', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('1.23');
  });
});
