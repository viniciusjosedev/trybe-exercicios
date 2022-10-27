const books = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
	let nomes = [];
  const livros = books.forEach(elemento => {
		if (2022 - elemento.releaseYear > 60) {
			nomes.push(elemento.name);
		};
	});
	return nomes;
}
console.log(oldBooks())