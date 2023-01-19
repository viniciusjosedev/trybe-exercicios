import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes iniciais', () => {
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

	it('Execução passo a passo.', () => {
		render(<App />);
		const email = 'email@email.com';
		const emailInput = screen.getByLabelText('Email');

		userEvent.type(emailInput, email);
		userEvent.click(screen.getByTestId('id-send'))

		expect(emailInput).toHaveValue('');
		expect(screen.getByTestId('id-email-user')).toHaveTextContent('Valor: ' + email)
		
	});


});
