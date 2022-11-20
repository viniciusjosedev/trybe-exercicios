const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function func(acc, cur) {
	return acc + cur.toLowerCase().split('a').length - 1
}

function containsA() {
	return names.reduce(func, 0)
}

console.log(containsA())
