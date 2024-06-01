import React from 'react';
import Calculator from '../components/Calculator';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Calculator/Error Handling',
  component: Calculator,
};

export const DivisionByZero = () => <Calculator />;
DivisionByZero.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: '9' }));
  await userEvent.click(canvas.getByRole('button', { name: '/' }));
  await userEvent.click(canvas.getByRole('button', { name: '0' }));
  await userEvent.click(canvas.getByRole('button', { name: '=' }));
  expect(canvas.getByTestId('display')).toHaveTextContent('ERROR');
};
