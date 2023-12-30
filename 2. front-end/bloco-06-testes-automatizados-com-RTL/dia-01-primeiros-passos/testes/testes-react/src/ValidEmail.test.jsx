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
		// const emailImpresso = screen.getByTestId('id-email-user');
		expect(screen.queryByText('Email Válido')).toBeNull();
		expect(screen.queryByText('Email Inválido')).toBeNull();
	});

	it('Verifica se a cor do texto muda caso o email seja valido e invalido', () => {
		render(<ValidEmail email="viniciusJose@gmail.com" />)
		expect(screen.getByText('Email Válido').style.color).toBe('green')

		render(<ValidEmail email="aaa" />)
		expect(screen.getByText('Email Inválido').style.color).toBe('red')
	})

})