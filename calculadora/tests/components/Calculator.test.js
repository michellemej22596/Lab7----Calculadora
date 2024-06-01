import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../src/components/Calculator/Calculator';

describe('Calculator Component', () => {
  test('displays the correct initial display value', () => {
    render(<Calculator />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('number button click updates the display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('addition operation works correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('handles max character limit', () => {
    render(<Calculator />);
    // Simulate clicks to exceed the max character limit
    const longNumber = '1234567890';
    longNumber.split('').forEach(num => {
      fireEvent.click(screen.getByText(num));
    });
    expect(screen.getByText('ERROR')).toBeInTheDocument();
  });
});
