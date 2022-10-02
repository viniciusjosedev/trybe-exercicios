// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

document.getElementsByTagName("p")[1].innerText = 'vou ta profisisonal';


// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function func(color) {
	document.getElementsByClassName("main-content")[0].style.backgroundColor = color;
}
func('rgb(76,164,109)');

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function colorIntern(color) {
	document.getElementsByClassName("center-content")[0].style.backgroundColor = color;
}
colorIntern('white');

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

function error(text) {
	document.getElementsByClassName("title")[0].innerText = text;
}
error('Exercício - JavaScript');
// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

function upCaseText() {
	var texto = document.getElementsByTagName('p')[0].innerText;
	document.getElementsByTagName('p')[0].innerText = texto.toUpperCase()
}
upCaseText()

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function print() {
	let lista = document.getElementsByTagName('p');
	for (i of lista) {
		console.log(i.innerText)
	}
}
print()


