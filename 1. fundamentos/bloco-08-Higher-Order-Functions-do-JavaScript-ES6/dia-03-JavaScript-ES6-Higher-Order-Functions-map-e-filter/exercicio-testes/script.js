// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// const listProducts = products.map((elemento, index) => {
// 	const lista = {}
// 	return lista[elemento] = prices[index];
// })
// console.log(listProducts)

let lista = {}
const listProducts2 = products.forEach((elemento, index) => {
	lista[elemento] = prices[index];
})
console.log(lista)
