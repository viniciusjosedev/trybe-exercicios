import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';

describe('testes do email', () => { 
	test('Testando um componente, caso o email seja válido.', () => {
		const EMAIL_USER = 'email@email.com';
		render(<ValidEmail email={ EMAIL_USER } />);
		const isValid = screen.getByText('Email Válido');
		expect(isValid).toBeInTheDocument();
	});

	test('Testando um componente, caso o email seja inválido.', () => {
		const EMAIL_USER = 'emailerrado';
		render(<ValidEmail email={ EMAIL_USER } />);
		const isValid = screen.getByText('Email Inválido');
		expect(isValid).toBeInTheDocument();
	});

	it('Verifica se nao existe texto antes do email ser enviado', () => {
		render(<App />)
		const teste = screen.getByTestId('id-email-user');
	});

})