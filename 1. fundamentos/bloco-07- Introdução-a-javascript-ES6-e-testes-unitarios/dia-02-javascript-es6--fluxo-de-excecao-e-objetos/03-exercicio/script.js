const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const addTurno = (objeto = lesson2, chave = 'turno', valor = objeto[chave] = 'tarde') => {
// 	objeto[chave] = valor;
// 	return objeto
// }
// console.log(addTurno(lesson1,))

// const listKeys = (objeto = lesson1) => {return Object.keys(objeto)}
// console.log(listKeys())

// const listLenght = (objeto = lesson1) => {return Object.keys(objeto).length}
// console.log(listLenght(lesson1))

// const listValues = (objeto = lesson1) => {return Object.values(objeto)}
// console.log(listValues(lesson1))

let listAll = {};

const allLessons = () => {
	listAll = {
		lesson1 : {},
		lesson2 : {},
		lesson3 : {}, 
	}
	for (index = 0; index < Object.keys(listAll).length; index += 1) {
		Object.assign(listAll[String(Object.keys(listAll)[index])], eval(Object.keys(listAll)[index]))
	}
	return listAll;

}
console.log(allLessons())


const estudantesTotal = () => {
	let resultado = 0;
	for (let index = 1; index <= Object.keys(listAll).length; index += 1) {
		resultado += listAll[String('lesson' + index)]['numeroEstudantes'];
	}
	return resultado;
}
console.log(estudantesTotal())

const obterValor = (objeto = listAll, chave = 0) => {return objeto[Object.keys(objeto)[chave]]}
console.log(obterValor(lesson1))

const verific = (objeto = listAll, chave = 'lesson1', valor = lesson1) => objeto[chave] === valor ? true : false 
console.log(verific())

const watchMatematic = () => {
	let cont = 0;
	for (let index = 1; index <= Object.keys(listAll).length; index += 1) {
		if (listAll[`lesson${index}`]['materia'] === "Matemática") {
			cont += listAll['lesson' + index]['numeroEstudantes']
		}
	} 
	return cont;
}

console.log(watchMatematic())