const books = require('./books.exercise2')

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
	return books.reduce((acc, cur, index) => {
		let resultado = acc + (cur.releaseYear - cur.author.birthYear);
		return (index === 5) ? resultado / 6 : resultado;
		
	}, 0);
};

console.log(averageAge())