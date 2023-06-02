import Person from "./Person";

type DataEstudante = {
	matricula: string;
	name: string;
	prova1: number;
	prova2: number;
	prova3: number;
	prova4: number;
	trabalho1: number;
	trabalho2: number;
	date: Date;
}

class Estudante extends Person {
	private matricula: string;
	private prova1: number;
	private prova2: number;
	private prova3: number;
	private prova4: number;
	private trabalho1: number;
	private trabalho2: number;

	constructor(data: DataEstudante) {
		if(data.matricula.length < 16) {
			throw new Error('matricula invalida');
		};

		if(Object.keys(data).filter((e) => e.includes('prova')).length > 4) {
			throw new Error('O maximo é 4 provas');
		};

		super(data.name, data.date)
		this.matricula = data.matricula;
		this.prova1 = data.prova1;
		this.prova2 = data.prova2;
		this.prova3 = data.prova3;
		this.prova4 = data.prova4;
		this.trabalho1 = data.trabalho1;
		this.trabalho2 = data.trabalho2;
	}

	sumGrades() {
		return this.prova1 + this.prova2 + this.prova3 + this.prova4; 
	}

	sumAverageGrade() {
		return (this.prova1 + this.prova2 + this.prova3 + this.prova4)/4;
	}

	generateEnrollment() {
		return `${this.matricula}`
	}
}

export default Estudante;
