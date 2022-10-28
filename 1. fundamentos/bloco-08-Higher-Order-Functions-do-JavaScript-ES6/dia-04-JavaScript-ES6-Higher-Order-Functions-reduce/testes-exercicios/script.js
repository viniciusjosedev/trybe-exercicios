// // // // reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )

// // // const numbers = [1, 32, 44, 2, 3];
// // // const iteracoesDoReduce = numbers.reduce((acc, curr) => {
// // //   console.log(`valor atual é ${curr}`);
// // //   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
// // //       // Iteração 1: valor do acc é 1 e o de curr é 32;
// // //  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
// // //      // Iteração 2: valor do acc é 33 e o de curr é 44;
// // // // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
// // //     // Iteração 3: valor do acc é 77 e o de curr é 2;
// // //     // Iteração 4: valor do acc é 79 e o de curr é 3;
// // //     // Valor final de `acc`é 82 e `curr` para no 3.
// // // 	console.log(acc + curr)
// // //   return acc + curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// // // });
// // // console.log(`O resultado final é ${iteracoesDoReduce}`);
// //   // por fim, esse console.log imprime o retorno final da nossa função.

// // const numbers = [1, 32, 44, 2, 3];	
// // const totalSum = numbers.reduce((acc, curr, indice, valor) => {
// //   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
// // 	console.log(indice, valor)
// //   return acc + curr;
// // },30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// // console.log(`valor final do acc é ${totalSum}`);

// const numbers = [1, 32, 44, 2, 3];
// const sumNumbers =  (acc, curr) => acc + curr;
// const totalSum = numbers.reduce(sumNumbers);
// console.log(totalSum); //112

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
let listaPares = [];
const numPares = numbers.forEach(elemento => {
	if (elemento % 2 === 0) {
		listaPares.push(elemento);
	}
});

const somadorFunc = (atual, proximo) => {return atual + proximo};

const somador = listaPares.reduce(somadorFunc)

console.log(somador);
