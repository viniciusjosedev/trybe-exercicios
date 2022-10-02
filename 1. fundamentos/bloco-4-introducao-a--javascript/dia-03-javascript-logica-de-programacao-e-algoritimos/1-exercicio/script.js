// Exercicio 1

// num = 10
// soma = 1
// for (i = num; i>=1; i-=1){
// 	soma *= i
// }
// console.log(soma)

// Exercicio 2

// let word = 'vinicius';
// contrario = []
// for (i = word.length-1; i >= 0; i-=1){
// 	contrario += word[i]
// }
// console.log(contrario)

// Exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// menor = array[0]
// maior = array[0]
// momento = ''
// for (i = 0; i <= array.length-1; i+=1){  
// 	momento = array[i]
// 	if (momento.length < menor.length){
// 		menor = momento
// 	}
// 	else if (momento.length>maior.length){
// 		maior = momento
// 	}
// }
// console.log('A menor palavra é:',menor, 'e a maior é', maior)

// Exercicio 4

num = 199999
cont = 0
lista = []
for (i = 1; i<=num; i+=1){
	cont = 0
	for (a=1; a<=i; a+=1){
		if (i%a==0){
			cont += 1
		}
	if (i==a && cont==2){
		lista.push(i)
	}
	}
}
console.log(lista[lista.length - 1])
