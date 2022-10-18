// function userInfo() {
//   const userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// }
// userInfo();
// console.log(userEmail);

// if (true) {
//   // inicio do escopo do if
//   var userAge = '20';
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// var userName = 'Isabella';
// var userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// let favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//   name: 'Cláudio',
//   id: '5489-2',
//   email: 'claudio@email.com',
// };

// userInfo.name = 'João';
// userInfo = 0;
// console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javasc	ript', 'CSS', 'HTML', 'React' ]

// technologies[0] = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// var num = 0;
// function teste() {
// 	if (true) {
// 		num = 15
// 		console.log(num)
// 	}
// 	console.log(num)
// }
// teste()
// console.log(num)

// let age = 20;

// age;

// console.log(age); // 20

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// function soma(num1, num2) {
// 	return num1 + num2
// }
// console.log(soma(2, 2))

// const soma = function (num1, num2) {
// 	return num1 + num2
// }
// console.log(soma(2, 2))

// const soma = (num1, num2) => num1 + num2

// console.log(soma(2, 2))

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression); // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression); // isso é mentira

// const teste = (15 === 15) ? 'sim' : 'nao'
// console.log(teste)

let num = 15;
function teste() {
	num = 17;
}
teste()
console.log(num)