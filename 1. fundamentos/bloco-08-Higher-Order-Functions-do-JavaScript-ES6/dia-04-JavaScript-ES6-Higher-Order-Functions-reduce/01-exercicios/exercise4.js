const books = require('./books.js')

// Encontre o livro com o maior nome.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
	return books.reduce((acc, cur, index) => {
	  acc.push(acc[index].length > cur.name.length ? acc[index] : cur.name);
		return index === books.length - 1 ? books.find(elemento => elemento.name === acc[index]) : acc;
	}, ['',]);
};

console.log(longestNamedBook())
