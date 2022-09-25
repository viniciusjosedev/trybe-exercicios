// Exercicio 1

// n = 5
// for (i = 1; i<=n; i+=1){
// 	console.log('*'.repeat(n))
// }

// Exercicio 2

// n = 5
// for (i = 1; i<=n; i+=1){
// 	console.log('*'.repeat(i))
// }

// Exercicio 3

// n = 10
// imprimir = []
// for (i = 1; i<=n; i+=1){
// 	if (i>=1 && i<n){
// 		imprimir.push(' '.repeat(n-i) + '*'.repeat(i))
// 	}
// 	else if (i==n){
// 		imprimir.push('*'.repeat(i))
// 	}
	
// }
// for (i=0; i<=imprimir.length-1; i+=1){
// 	console.log(imprimir[i])
// }

// Exercicio 4

// n = 7
// imprimir = []
// cont = 0
// if (n%2!=0){
	
// 	for (i = n; i>=1; i-=1){
// 		if (i==n){
// 			imprimir.push('*'.repeat(i))
// 		}
// 		else if (n-cont==1){
// 			break
// 		}
// 		else if (i<n){
// 			cont +=2
// 			imprimir.push(' '.repeat(n-i) + '*'.repeat(n-cont))
// 		}
		
// 	}
// 	for (i=imprimir.length-1; i>=0; i-=1){
// 		console.log(imprimir[i])
// 	}
// }
// else{
// 	console.log("O numero de entrada precisa ser impar!")
// }

// Exercicios 5

// n = 69
// imprimir = []
// cont = n-2
// if (n%2!=0){
// 	for (i = n; i>=1; i-=1){
// 		if (i==n){
// 			imprimir.push('*'.repeat(i))
// 		}
// 		else if (n-cont==n-1){
// 			imprimir.push(' '.repeat(n-i) + '*')
// 			break
// 		}
// 		else if (i<n){
// 			cont -= 2
// 			imprimir.push(' '.repeat(n-i) + '*' + ' '.repeat(cont) + '*')
// 		}
		
// 	}
// 	for (i=imprimir.length-1; i>=0; i-=1){
// 		console.log(imprimir[i])
// 	}
// }
// else{
// 	console.log("O numero de entrada precisa ser impar!")
// }

// Exercicio 6

num = 7
cont = 0
for (i=1; i<=num; i+=1){
	if (num%i==0){
		cont+=1
	}
}
if(cont==2){
	console.log('É primo')
}
else{
	console.log('Não é primo')
}