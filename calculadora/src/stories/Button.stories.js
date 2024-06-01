import React from 'react';
import Calculator from '../components/Calculator';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Calculator/Button',
  component: Calculator
};

export const NumberButton = () => <Calculator />;
NumberButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: '1' }));
};

export const OperationButton = () => <Calculator />;
OperationButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: '+' }));
};
