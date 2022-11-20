const myFizzBuzz = require('./myFizzBuzz');

describe("A função myFizzBuzz(num) recebe um número num e retorna 'fizzbuzz' se o número for divisível por 3 e 5, retorna 'fizz' se for divisível apenas por 3, retorna 'buzz' se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número", () => {
	it('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});
	it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
		expect(myFizzBuzz(3)).toEqual('fizz');
	})
	it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
		expect(myFizzBuzz(5)).toEqual('buzz');
	})
	it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
		expect(2).toEqual(myFizzBuzz(2))
	})
	it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
		expect(myFizzBuzz('1')).toEqual(false)
	})
})