const soma = require('./function-soma')

it('20 + 2 tem que ser igual a 22', () => {
	expect(soma(20, 2)).toBe(22);
})