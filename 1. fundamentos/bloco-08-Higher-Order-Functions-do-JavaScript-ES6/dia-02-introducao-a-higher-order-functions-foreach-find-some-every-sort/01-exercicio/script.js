const books = require('./books')

// function authorBornIn1947() {
//   return books.find(elemento => elemento.author.birthYear === 1947)
// }
// console.log(authorBornIn1947())

// const menorNome = () => {
// 	let nome;
// 	books.forEach((elemento, index) => {
// 		if (index+1 < books.length && elemento['name'].length <= books[index+1]['name'].length) {
// 			nome = elemento['name'];
// 		} else if (index+1 < books.length && elemento['name'].length > books[index+1]['name'].length){
// 			nome = books[index+1]['name'];
// 		}
// 	})
// 	return nome;
// };

// console.log(menorNome());

// const primeiroLivroCom26Caracteres = () => {
// 	const encontrado = books.find(elemento => elemento.name.length === 26);
// 	return encontrado.name;
// }

// console.log(primeiroLivroCom26Caracteres())


// const booksOrderedByReleaseYearDesc = () => {
// 	let list = [];
// 	let expectOutput = [];
//   books.forEach(elemento => {
// 		list.push(elemento.releaseYear);
// 	});
// 	list.sort((a, b) => b - a);
// 	for (index = 0; index < list.length; index += 1) {
// 		let buscador = books.find(elemento => elemento.releaseYear === list[index])
// 		expectOutput.push(buscador)
// 	};
// 	return expectOutput;
// }
// console.log(booksOrderedByReleaseYearDesc())

// const everyoneWasBornOnSecXX = () => books.every(elemento => elemento.author.birthYear >= 1901 && elemento.author.birthYear < 2000)
// console.log(everyoneWasBornOnSecXX())

// const someBookWasReleaseOnThe80s = () => books.some(elemento => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989)
// console.log(someBookWasReleaseOnThe80s())

// const authorUnique = () => {
// 	let lista = [];
// 	let cont = 0;
// 	let expectOutput;
// 	books.forEach(elemento => {
// 		lista.push(elemento.releaseYear)
// 	})
// 	lista.sort()
// 	lista.forEach(elemento => {
// 		for (let index = 0; index < books.length; index += 1) {
// 			if (elemento === books[index].releaseYear) {
// 				cont += 1
// 			} else if (cont < 3) {
// 				expectOutput = true
// 			} else if (cont >= 3) {
// 				expectOutput = false
// 			} else if (index === books.length - 1){
// 				cont === 0;	
// 			}
// 		}
// 	})
// 	return expectOutput;
// }

// console.log(authorUnique())


const lista = [1,23,4,5,6,7,8,91,4,1,4,1,4,1,4,1,4,1,4,14] ;

const func = () => {
	let listaNova = [];
  lista.forEach((elemento, index) => {
		listaNova.push(elemento)
		console.log(elemento)
	})
	// return listaNova;
}
console.log(func());