// let diasDaSemana = {
// 	1: 'domingo',
// 	2: 'segunda',
// 	3: 'terça',
// 	4: 'quarta',
// 	5: 'quinta',
// 	6: 'sexta',
// 	7: 'sábado',
//   };
  
//   console.log(diasDaSemana.segunda); // domingo

// let conta = {
// 	agencia: '0000',
// 	banco: {
// 	  cod: '012',
// 	  id: 4,
// 	  nome: 'TrybeBank',
// 	},
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4
  
//   console.log(typeof(conta))

// let usuario = {
// 	id: 99,
// 	email: 'jakeperalta@gmail.com',
// 	infoPessoal: {
// 	  nome: 'Jake',
// 	  sobrenome: 'Peralta',
// 	  endereco: {
// 		rua: 'Smith Street',
// 		bairro: 'Brooklyn',
// 		cidade: 'Nova Iorque',
// 		estado: 'Nova Iorque',
// 	  },
// 	},
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// player = {
// 	name: name,
// 	lastName: lastName,
// 	age: age,
// 	medals: medals
// }

// console.log(player['medals'])

let car = {
	type: 'Fiat',
	model: '500',
	color: 'white',
  };
  
  for (let index in car) {
	console.log(index, car[index]);
  }