// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3));

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, '3')); // resultado: 23

// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, 3));

// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new console.log('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));

// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum(2, '3'));

// const verific = (num1, num2) => {
// 	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
// 		throw new Error('O valor é uma string, por favor, insira apenas números!');
// 	}
// }

// const soma = (num1, num2) => {
// 	try {
// 		verific(num1, num2);
// 		return num1 + num2;
// 	} catch (error){
// 		return error.message;
// 	}
// }

// console.log(soma(5, 5))

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// const dicionario = {
// 	'oi': 12
// }
// console.log(dicionario.oi)
// console.log(Object.entries(dicionario)


