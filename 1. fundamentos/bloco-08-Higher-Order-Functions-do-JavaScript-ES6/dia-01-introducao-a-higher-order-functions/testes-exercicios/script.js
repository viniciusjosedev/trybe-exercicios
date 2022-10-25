// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const initialSum = sumFixAmount(15)
// console.log(initialSum(5));

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count)
// }	
// };

// repeat(3, (a) => {
//   if (a % 2 === 0) {
//     console.log(a, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());

// Ao chamar a função doingThings:
function acordando() { return 'acordando'}
function cafe() { return 'bora tomar café' }
function dormir() { return 'partiu dormir'} 
	

function doingThings(wokeUp) {	
	console.log(wokeUp)
}

doingThings(dormir())


