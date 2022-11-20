// Exercicio 1

// const fatorial = num => {
// 	let result = ''
// 	let cont = 1;
// 	for (let index = num; index >= 1; index -= 1) {
// 		if (index === num) {
// 			cont *= index
// 			result += `${index}! = ${index} * `
// 		} else if (index > 1 && index < num) {
// 			cont *= index
// 			result += `${index} * `
// 		} else {
// 			cont *= index
// 			result += `${index} = ${cont}`
// 			return `Este é o fatorial: ${result}`
// 		}
// 	}
// }

// console.log(fatorial(4))

// const fatorial = (num, texto = '', valor = num) => (num > 1) ? fatorial(num - 1, `${texto}${num} * `, valor*=(num-1))  : `Este é o fatorial: ${texto}1 = ${valor}` 
// console.log(fatorial(4)) // Este é o fatorial: 4 * 3 * 2 * 1 = 24

// Exercicio 2

// const longestWord = (string) => { 
// 	const palavras = string.split(' ')
// 	let palavra;
// 	for(let index = 0; index < palavras.length; index += 1) {
// 		if (index === 0 ) {
// 			if (palavras[index].length < palavras[index + 1].length) {
// 				palavra = palavras[index + 1]
// 			} else {
// 				palavra = palavras[index]
// 			}
// 		} else if (index > 0 && index < palavras.length -1) { 
// 			if (palavra.length < palavras[index + 1].length) {
// 				palavra = palavras[index + 1]
// 			}
// 		} else {
// 			return palavra
// 	}
// 	}
// }

// console.log(longestWord('viniciusjosedasilva sou foda kkk'))

// Exercicio 3

// window.onload = () => {
// 	document.getElementsByTagName('button')[0].addEventListener('click', () => {
// 		document.getElementsByTagName('p')[0].textContent = (String(parseInt(document.getElementsByTagName('p')[0].textContent) + 1)) 
// 	})
// }

// Exercicio 4

const minhasSkills = retorno => {
	const skills = ['HTML', 'JavaScript', 'CSS'];
	let texto = `${retorno} \nMinhas três principais habilidades são: \n${skills[0]} \n${skills[1]} \n${skills[2]}`
	texto = texto.replace('undefined', ' oi');
	return texto;
}

const substituaX = nome => {
	let frase = 'Tryber x aqui!';
	frase = frase.replace('x', nome)
	console.log(minhasSkills(frase))
}
console.log(substituaX('Vinicius'))




