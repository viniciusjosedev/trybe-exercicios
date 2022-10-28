const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const reduzido = grades.map(elemento => {
	let cont = 0;
	for (let index = 0; index < elemento.length; index += 1) {
		cont += elemento[index]
	};
	return cont / elemento.length;
});

function studentAverage() {
  return students.reduce((acc, cur, index) => {
		acc.push({name: cur, average: reduzido[index]})
		return acc;
	}, []);
}

console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 }
];
