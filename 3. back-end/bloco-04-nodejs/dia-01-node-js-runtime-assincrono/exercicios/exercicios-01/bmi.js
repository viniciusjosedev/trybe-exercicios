const FasamImc = require('fasam-imc-calc');
const readline = require('readline-sync');

const imc = new FasamImc();

const weight = readline.questionFloat('What’s your weight?: ');
const heigth = readline.questionFloat('What’s your height?: ');

function category(weight, height) {
	const imcCalc = imc.calc(50, 1.62);
	if (imcCalc < 18.5) {
		return console.log(`${imcCalc}, Abaixo do peso (magreza)`)
	}	if ( 8.5 <= imcCalc <= 24.9) {
		return console.log(`${imcCalc}, Peso normal`)
	} if ( 25 <= imcCalc <= 29.9 ) {
		return console.log(`${imcCalc}, Acima do peso (sobrecarga)`)
	}		if (30 <= imcCalc <= 34.9) {
		return console.log(`${imcCalc}, Obesidade grau 1`)
	}		if (35 <= imcCalc <= 39.9) {
		return console.log(`${imcCalc}, Obesidade grau 2`)
	} if (40 <= imcCalc) {
		return console.log(`${imcCalc}, Obesidade grau 3 e 4`)
	}
}

category();






