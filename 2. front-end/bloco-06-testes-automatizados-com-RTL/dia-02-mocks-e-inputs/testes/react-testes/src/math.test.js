// let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

let math = require('./math');
// jest.mock('./math');


describe('Teste com jest.fn()', () => {
	test('quando o número aleatório é par, a função retorna `true`', () => {
		math.divisivelPorDois = jest.fn().mockReturnValue(true);
		// math.divisivelPorDois.mockReturnValue(true);
		expect(math.divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
		expect(math.divisivelPorDois()).toBe(true);
	});

	test("#divisivelPorDois", () => {
		// testando se a função foi chamada
		math.divisivelPorDois();
		math.divisivelPorDois();
		math.divisivelPorDois();
		math.divisivelPorDois();
		expect(math.divisivelPorDois).toHaveBeenCalled();
		expect(math.divisivelPorDois).toHaveBeenCalledTimes(4);
	});

	// it('Testando a função somar', () => {
	// 	math.somar = jest.fn().mockReturnValue(3);
	// 	// math.somar.mockImplementation((a, b) => a + b);
	// 	const teste = math.somar(1, 2);
	// 	expect(math.somar).toHaveBeenCalled()
	// 	expect(teste).toBe(3)
	// 	expect(math.somar).toHaveBeenCalledWith(1, 2)
	// })

	test("#somar", () => {
		// testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
	  jest.spyOn(math, "subtrair");
	
		math.subtrair(1,2)
		expect(math.subtrair).toHaveBeenCalled();
		expect(math.subtrair).toHaveBeenCalledTimes(1);	
		expect(math.subtrair).toHaveBeenCalledWith(1, 2);
		expect(math.subtrair(1, 2)).toBe(-1);

		math.subtrair.mockClear();

		math.subtrair.mockImplementation((a, b) => a + b )
		math.subtrair(1,2);
		expect(math.subtrair).toHaveBeenCalled()
		expect(math.subtrair).toHaveBeenCalledTimes(1)
		expect(math.subtrair(1,2)).toBe(3)

		math.subtrair.mockReset().mockReturnValue(true)

		expect(math.subtrair(1,2)).toBe(true)

		math.subtrair.mockRestore();
		jest.spyOn(math, "subtrair");

		expect(math.subtrair(1,2)).toBe(-1)
		expect(math.subtrair).toHaveBeenCalledTimes(1)
	});
});
