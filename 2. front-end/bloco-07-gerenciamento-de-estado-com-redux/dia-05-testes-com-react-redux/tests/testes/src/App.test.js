import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('A página deve renderizar dois botões e o número "0"', () => {
  render(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});
