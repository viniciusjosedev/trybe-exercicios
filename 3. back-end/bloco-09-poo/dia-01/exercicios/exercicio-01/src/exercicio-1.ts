type DataEstudante = {
	matricula: number;
	nome: string;
	prova1: number;
	prova2: number;
	prova3: number;
	prova4: number;
	trabalho1: number;
	trabalho2: number;
}

class Estudante {
	private matricula: number;
	private nome: string;
	private prova1: number;
	private prova2: number;
	private prova3: number;
	private prova4: number;
	private trabalho1: number;
	private trabalho2: number;

	constructor(data: DataEstudante) {
		this.matricula = data.matricula;
		this.nome = data.nome;
		this.prova1 = data.prova1;
		this.prova2 = data.prova2;
		this.prova3 = data.prova3;
		this.prova4 = data.prova4;
		this.trabalho1 = data.trabalho1;
		this.trabalho2 = data.trabalho2;
	}

	getSumNotas() {
		return this.prova1 + this.prova2 + this.prova3 + this.prova4; 
	}

	getMediaNOtas() {
		return (this.prova1 + this.prova2 + this.prova3 + this.prova4)/4;
	}
}

const aluno1 = new Estudante({
	matricula: 12,
	nome: 'vnicius',
	prova1: 7,
	prova2: 7,
	prova3: 9,
	prova4: 9,
	trabalho1: 8,
	trabalho2: 8,
})

console.log(aluno1.getSumNotas());
console.log(aluno1.getMediaNOtas());



