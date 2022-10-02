let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (i = 0; i < numbers.length; i+=1){
// 	console.log(numbers[i])
// }

// soma = 0
// for (i = 0; i < numbers.length; i+=1){
// 	soma += numbers[i]
// }
// console.log(soma)

// soma = 0
// for (i = 0; i < numbers.length; i+=1){
// 	soma += numbers[i]
// }
// console.log(soma/numbers.length)

// soma = 0
// for (i = 0; i < numbers.length; i+=1){
// 	soma += numbers[i]
// }
// if (soma/numbers.length>=20){
// 	console.log("Valor maior que 20")
// }
// else{
// 	console.log("Valor menor que 20")
// }

// num = 0
// for (i = 0; i < numbers.length; i+=1){
// 	if (i===0){
// 		num = numbers[i]
// 	}
// 	else if (numbers[i]>num){
// 		num = numbers[i]
// 	}
// }
// console.log(num)

// cont = 0
// for (i = 0; i < numbers.length; i+=1){
// 	if (numbers[i]%2!==0){
// 		cont += 1
// 	}
// }
// console.log(cont)

// num = 0
// for (i = 0; i < numbers.length; i+=1){
// 	if (i===0){
// 		num = numbers[i]
// 	}
// 	else if (numbers[i]<num){
// 		num = numbers[i]
// 	}
// }
// console.log(num)

// a = 25
// let lista = []
// for(i=1; i<=a; i+=1){
// 	lista.push(i)
// }
// console.log(lista)

division = []
let lista = []
for(i=1; i<=25; i+=1){
	lista.push(i)
	if(i===25){
		for (a=0; a<lista.length; a+=1){
			division.push(lista[a]/2)
		}
	}
}
console.log(division)
