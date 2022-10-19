// Exercicio 1

// function testingScope(escopo) {
// 	if (escopo === false) {
// 		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = `${ifScope}. ótimo, fui utilizada no escopo !`;
// 		console.log(ifScope);
// 	} else {
// 		const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
// 		console.log(elseScope);
// 	}
// 	console.log('o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Exercicio 2

let oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (a, b) => {
		return a - b
};
console.log(`Os numeros ${oddsAndEvens.sort(sortOddsAndEvens)} se encontram em ordem crescente!`); 