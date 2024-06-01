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
    const longNumber = '1234567890';
    longNumber.split('').forEach(num => {
      fireEvent.click(screen.getByText(num, { selector: 'button' }));
    });
    expect(screen.getByText('ERROR')).toBeInTheDocument();
  });

  test('decimal point works correctly and prevents multiple decimals', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByText('1.23')).toBeInTheDocument(); // Assumes only one decimal point is allowed
  });

  test('display error for negative result', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('ERROR')).toBeInTheDocument(); // Assumes negative results are not allowed
  });
});

