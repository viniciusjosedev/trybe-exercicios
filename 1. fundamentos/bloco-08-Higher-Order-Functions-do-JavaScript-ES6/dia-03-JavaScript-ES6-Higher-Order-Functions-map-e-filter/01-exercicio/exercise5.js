const books = require('./books');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
	let lista = [];
  const autores = books.forEach(elemento => {
		if (elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica') {
			lista.push(elemento.author.name);
		}
	});
	return lista.sort();
}
console.log(fantasyOrScienceFictionAuthors())