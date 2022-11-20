// // // // // // // // // // // // // const numbers = [1, 2, 3];
// // // // // // // // // // // // // const vogais = ['a','e','i','o','u'];

// // // // // // // // // // // // // const all = [numbers, vogais]

// // // // // // // // // // // // // numbers.push(4);
// // // // // // // // // // // // // console.log(all); // [1, 2, 3, 4]

// // // // // // // // // // // // // Faça uma lista com as suas frutas favoritas
// // // // // // // // // // // // const specialFruit = ['banana', 'maça', 'uva'];

// // // // // // // // // // // // // Faça uma lista de complementos que você gostaria de adicionar
// // // // // // // // // // // // const additionalItens = ['creme de leite', 'leite condençado', 'água'];

// // // // // // // // // // // // const fruitSalad = (specialFruit, additionalItens) => {
// // // // // // // // // // // //   return [...specialFruit, ...additionalItens]
// // // // // // // // // // // // };

// // // // // // // // // // // // console.log(fruitSalad(specialFruit, additionalItens));

// // // // // // // // // // // function quantosParams(...args) {
// // // // // // // // // // //   console.log('parâmetros:', args);
// // // // // // // // // // //   return `Você passou ${args.length} parâmetros para a função.`;
// // // // // // // // // // // }

// // // // // // // // // // // console.log(quantosParams(1,2,3)); // Você passou 3 parâmetros para a função.
// // // // // // // // // // // // console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// // // // // // // // // // // const sum = (...arga) => arga.reduce((accumulator, current) => accumulator + current, 0);
// // // // // // // // // // // console.log(sum(4, 7, 8, 9, 60)); // 88

// // // // // // // // // // const product = {
// // // // // // // // // //   name: 'Smart TV Crystal UHD',
// // // // // // // // // //   price: '1899.05',
// // // // // // // // // //   seller: 'Casas de Minas',
// // // // // // // // // // };

// // // // // // // // // // const { name, price, seller } = product;
// // // // // // // // // // console.log(name); // Smart TV Crystal UHD
// // // // // // // // // // console.log(price); // Casas de Minas
// // // // // // // // // // console.log(seller);
// // // // // // // // // // console.log(product.name, product.price, product.seller)	

// // // // // // // // // // definindo o objeto
// // // // // // // // // const character = {
// // // // // // // // //   name: 'Luke SkyWalker',
// // // // // // // // //   age: '53',
// // // // // // // // //   description: {
// // // // // // // // //     specieName: 'Human',
// // // // // // // // //     jedi: true,
// // // // // // // // //   },
// // // // // // // // //   homeWorld: {
// // // // // // // // //     name: 'Tatooine',
// // // // // // // // //     population: '200000',
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // // // // // // // // console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// // // // // // // // // // const {name, age, description, homeWorld} = character
// // // // // // // // // // const {jedi} = description;
// // // // // // // // // // const {nameOfPlanet} = homeWorld;
// // // // // // // // // // console.log(`Nome do personagem é ${name}, a idade é ${age}, o nome do planeta é ${homeWorld.name} e ele ${jedi === true ? 'é um' : 'não é um'} jedi.`)

// // // // // // // // const daysOfWeek = {
// // // // // // // //   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
// // // // // // // //   weekend: ['Saturday', 'Sunday'],
// // // // // // // // };

// // // // // // // // const {workDays, weekend} = daysOfWeek;
// // // // // // // // console.log(...workDays, ...weekend);

// // // // // // // const student = {
// // // // // // //   a: 'Maria',
// // // // // // //   b: 'Turma B',
// // // // // // //   c: 'Matematica',
// // // // // // // };


// // // // // // const user = {
// // // // // //   name: 'Maria',
// // // // // //   age: 21,
// // // // // //   nationality: 'Brazilian',
// // // // // // };

// // // // // // const jobInfos = {
// // // // // //   profession: 'Software engineer',
// // // // // //   squad: 'Rocket Landing Logic',
// // // // // //   squadInitials: 'RLL',
// // // // // // };

// // // // // // const {name, age, nationality} = user;
// // // // // // const {profession, squad, squadInitials} = jobInfos;

// // // // // // console.log(`Hi, i am ${name}, have ${age} and am from ${nationality}. Work how ${profession} in squad ${squad}, how the sigles ${squadInitials}`);

// // // // // const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // // // // // saudacoes[1](saudacoes[0]); // Olá

// // // // // // Produza o mesmo resultado acima, porém utilizando array destructuring

// // // // // const [saudacao, func ] = saudacoes;
// // // // // // console.log(saudacao, func)
// // // // // func(saudacao);

// // // // let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// // // // // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo	

// // // // const [, , , par1, par2, par3, par4] = numerosPares

// // // // console.log(par1,par2,par3,par4); // [6, 8, 10, 12];

// // // const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

// // // const person = {
// // //   firstName: 'João',
// // //   lastName: 'Jr II',
// // // };

// // // const otherPerson = {
// // //   firstName: 'Ivan',
// // //   lastName: 'Ivanovich',
// // //   nationality: 'Russian',
// // // };

// // // console.log(getNationality(otherPerson)); // Ivan is Russian
// // // console.log(getNationality(person));

// // const getPosition = (latitude, longitude) => ({
// //   latitude,
// //   longitude,
// // });

// // console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value = number) => {
//   return `O numero é ${number} e o valor é ${value}`
// };

// console.log(multiply(8));

