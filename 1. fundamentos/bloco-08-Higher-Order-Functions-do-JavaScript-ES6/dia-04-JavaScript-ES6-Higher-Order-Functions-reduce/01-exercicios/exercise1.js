const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((atual, proximo) => {
		for (let index = 0; index < proximo.length; index += 1) {
			atual.push(proximo[index])
		}
		return atual;
	}, []);
}

console.log(flatten())
