import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/email/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verificando se existe um botão', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const linkElement = screen.getByTestId('id-send');
  expect(linkElement).toBeInTheDocument();
	expect(linkElement).toHaveValue('Enviar')
	expect(linkElement).toHaveProperty('type', 'button')
});

