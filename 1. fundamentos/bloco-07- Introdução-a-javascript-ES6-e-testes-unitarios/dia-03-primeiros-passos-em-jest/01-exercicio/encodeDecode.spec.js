const {vogais, code, encode, decode} = require('./encodeDecode')

describe('Para as funções encode e decode, crie os seguintes testes em Jest:', () => {
	it('Teste se encode e decode são funções;', () => {
		expect(typeof encode && typeof decode ).toEqual('function')
	})
	it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
		expect(encode('teste texto aeiou')).toEqual('t2st2 t2xt4 12345');
	})
	it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
		expect(decode('t2st2 t2xt4 12345')).toEqual('teste texto aeiou')
	})
	it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
		const lista = [encode('bcdfghjklmnpqrstvwxyz'), decode('06789')]
		expect(lista).toEqual(['bcdfghjklmnpqrstvwxyz', '06789'])
	})
	it("Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.", () => {
		const lista = [encode('teste 1234567890').length, decode('12345 hanas frozen').length]
		expect(lista).toEqual([16, 18])
	})
	
})