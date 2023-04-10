const fetch = require('node-fetch');
const readline = require('readline-sync');
const fs = require('fs/promises');

// async function fetchAPI() {
// 	const requisicao = await ( await fetch('https://lms-assets.betrybe.com/lms/simpsons.json') ).json()
// 	requisicao.forEach((e) => console.log(`${e.id} - ${e.name}`));
// }

// fetchAPI()

// const id = readline.questionInt('Digite um id: ')

// async function fetchAPI(id) {
// 	try {
// 		const requisicao = await ( await fetch('https://lms-assets.betrybe.com/lms/simpsons.json') ).json()
// 		if (!requisicao.some(e => e.id.includes(id))) throw new Error('id não encontrado');
// 		console.log(requisicao[id])
// 	}
// 	catch({ message }) {
// 		console.log(message)
// 	}
// }

// fetchAPI(id);

// async function removeID() {
// 	const teste = JSON.parse( await fs.readFile('./simpsons.json', 'UTF8'))
// 	const testeFilter = teste.filter((e) => Number(e.id) !== 6 && Number(e.id) !== 10);
// 	console.log(testeFilter);
// }

// removeID();

// async function removeID() {
// 	const teste = JSON.parse( await fs.readFile('./simpsons.json', 'UTF8'))
// 	const testeFilter = teste.filter((e, i) => i <= 3);
// 	await fs.writeFile('./simpsonFamily.json', JSON.stringify(testeFilter))
// 	console.log(testeFilter);
// }

// removeID();

// async function removeID() {
// 	// const personagensFull = JSON.parse( await fs.readFile('./simpsons.json', 'UTF8'));
// 	const personagensMin = JSON.parse( await fs.readFile('./simpsonFamily.json', 'UTF8'))
// 	await fs.writeFile('./simpsonFamily.json', JSON.stringify([...personagensMin, {id: 4, name: 'Nelson Muntz'}]))
// }

// removeID();

async function removeID() {
	// const personagensFull = JSON.parse( await fs.readFile('./simpsons.json', 'UTF8'));
	const personagensMin = JSON.parse( await fs.readFile('./simpsonFamily.json', 'UTF8'))
	personagensMin[4].name = 'Maggie Simpson';
	await fs.writeFile('./simpsonFamily.json', JSON.stringify([...personagensMin]))
}

removeID();


