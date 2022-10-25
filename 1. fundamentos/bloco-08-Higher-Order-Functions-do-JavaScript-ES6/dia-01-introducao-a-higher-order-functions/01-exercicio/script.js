// Exercicio 1

// const nome1 = (nome = 'Pedro Guerra') => ({nome, email: `${nome}@trybe.com`})
// const nome2 = (nome = 'Luiza Drumond') => ({nome, email: `${nome}@trybe.com`})
// const nome3 = (nome = 'Carla Paiva') => ({nome, email: `${nome}@trybe.com`})


// const newEmployees = (nome1, nome2, nome3) => {
//   const employees = {
//     id1: nome1(), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: nome2(), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: nome3(), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(nome1, nome2, nome3))

// Exercicio 2

// const random = () => (Math.floor(Math.random() * 5))
// const verific = (escolha, resultado) => (escolha === resultado()) ? 'Parabéns, você venceu!' : 'Infelizmente não foi desta vez.'

// console.log(verific(2, random));

// Exercicio 3

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// let cont = 0;
// const compare2 = (resposta, index) => {
// 	if (resposta === RIGHT_ANSWERS[index]) {
// 		cont += 1
// 	} else if (resposta === 'N.A') {
// 		cont += 0
// 	} else {
// 		cont -= 0.5
// 	}
// }
// const compare = (array, respostaCerta) => {
// 	for(let index = 0; index < array.length; index += 1) {
// 		respostaCerta(STUDENT_ANSWERS[index], index)
// 	}
// 	return cont
// }

// console.log(compare(STUDENT_ANSWERS, compare2))

