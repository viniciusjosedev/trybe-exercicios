// // let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// // let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

// let math = require('./math');
// // jest.mock('./math');


// describe('Teste com jest.fn()', () => {
// 	test('quando o número aleatório é par, a função retorna `true`', () => {
// 		math.divisivelPorDois = jest.fn().mockReturnValue(true);
// 		// math.divisivelPorDois.mockReturnValue(true);
// 		expect(math.divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
// 		expect(math.divisivelPorDois()).toBe(true);
// 	});

// 	test("#divisivelPorDois", () => {
// 		// testando se a função foi chamada
// 		math.divisivelPorDois();
// 		math.divisivelPorDois();
// 		math.divisivelPorDois();
// 		math.divisivelPorDois();
// 		expect(math.divisivelPorDois).toHaveBeenCalled();
// 		expect(math.divisivelPorDois).toHaveBeenCalledTimes(4);
// 	});

// 	// it('Testando a função somar', () => {
// 	// 	math.somar = jest.fn().mockReturnValue(3);
// 	// 	// math.somar.mockImplementation((a, b) => a + b);
// 	// 	const teste = math.somar(1, 2);
// 	// 	expect(math.somar).toHaveBeenCalled()
// 	// 	expect(teste).toBe(3)
// 	// 	expect(math.somar).toHaveBeenCalledWith(1, 2)
// 	// })

// 	test("#somar", () => {
// 		// testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
// 	  jest.spyOn(math, "subtrair");
	
// 		math.subtrair(1,2)
// 		expect(math.subtrair).toHaveBeenCalled();
// 		expect(math.subtrair).toHaveBeenCalledTimes(1);	
// 		expect(math.subtrair).toHaveBeenCalledWith(1, 2);
// 		expect(math.subtrair(1, 2)).toBe(-1);

// 		math.subtrair.mockClear();

// 		math.subtrair.mockImplementation((a, b) => a + b )
// 		math.subtrair(1,2);
// 		expect(math.subtrair).toHaveBeenCalled()
// 		expect(math.subtrair).toHaveBeenCalledTimes(1)
// 		expect(math.subtrair(1,2)).toBe(3)

// 		math.subtrair.mockReset().mockReturnValue(true)

// 		expect(math.subtrair(1,2)).toBe(true)

// 		math.subtrair.mockRestore();
// 		jest.spyOn(math, "subtrair");

// 		expect(math.subtrair(1,2)).toBe(-1)
// 		expect(math.subtrair).toHaveBeenCalledTimes(1)
// 	});
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
	const joke = {
		id: '7h3oGtrOfxc',
    joke: 'teste',
    status: 200,
	};

	global.fetch = jest.fn().mockResolvedValue({
		json: jest.fn().mockResolvedValue({joke: 'teste 123'}).mockReturnValueOnce({joke: 'teste'}),
	});

	render(<App />)
	expect(await screen.findByText('teste')).toBeInTheDocument();
	expect(global.fetch).toBeCalledTimes(1)


	userEvent.click(screen.getByText('New Joke'))
	expect(await screen.findByText('teste 123')).toBeInTheDocument();
	expect(screen.queryByText('teste')).toBeNull()
	expect(global.fetch).toBeCalledTimes(2)

});
