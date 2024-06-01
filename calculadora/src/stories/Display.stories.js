import React from 'react';
import Calculator from '../components/Calculator';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Calculator/Display',
  component: Calculator,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
};

export const Default = () => <Calculator />;
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: '1' }));
  await userEvent.click(canvas.getByRole('button', { name: '2' }));
  await userEvent.click(canvas.getByRole('button', { name: '3' }));
};
