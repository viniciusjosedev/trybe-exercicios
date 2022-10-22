const myRemove = require('./myRemove')

describe('function myRemove', () => {
	test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
		expect([1,2,4]).toEqual(expect.arrayContaining(myRemove([1,2,3,4], 3)))
	})
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		expect([1,2,3,4]).not.toEqual(myRemove([1,2,3,4], 3))
	})
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
		expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
	})
})
