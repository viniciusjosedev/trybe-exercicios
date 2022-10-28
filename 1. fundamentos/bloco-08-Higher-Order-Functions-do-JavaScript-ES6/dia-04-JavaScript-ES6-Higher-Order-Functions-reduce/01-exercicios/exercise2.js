const books = require('./books.js')

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
	return books.reduce((atual, proximo) => {
		atual.push(proximo.author.name)
		return atual
	}, []);
};

console.log(reduceNames())
