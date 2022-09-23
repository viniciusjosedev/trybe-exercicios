let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// valor = 0;
// for (i=1; i<numbers.length; i+=1){
// 	for(a=0; a<i; a+=1){
// 		if (numbers[i]<numbers[a]){
// 			valor = numbers[i]
// 			numbers[i] = numbers[a]
// 			numbers[a] = valor
// 		}
// 	}
// }
// console.log(numbers)

// valor = 0;
// for (i=1; i<numbers.length; i+=1){
// 	for(a=0; a<i; a+=1){
// 		if (numbers[i]>numbers[a]){
// 			valor = numbers[i]
// 			numbers[i] = numbers[a]
// 			numbers[a] = valor
// 		}
// 	}
// }
// console.log(numbers)

novoNumbers = []
for (i=0; i<numbers.length; i+=1){
	if (i===numbers.length-1){
		novoNumbers.push(numbers[i]*2)
	}
	else{
		novoNumbers.push(numbers[i]*numbers[i+1])
	}
}
console.log(novoNumbers)