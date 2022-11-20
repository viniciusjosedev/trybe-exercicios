const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
	return books.find(elemento => elemento.author.name.split('.').length - 1 === 3).name;
};
console.log(authorWith3DotsOnName());