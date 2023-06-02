import Estudante from "./class/Estudante";

const aluno1 = new Estudante({
	matricula: '11111111111111111111111111',
	name: 'vnicius',
	prova1: 7,
	prova2: 7,
	prova3: 9,
	prova4: 9,
	trabalho1: 8,
	trabalho2: 8,
	date: new Date('2002-06-26')
});

console.log(aluno1.sumGrades());
console.log(aluno1.sumAverageGrade());
console.log(aluno1.generateEnrollment());
