export class Subject {
	name: string;


	constructor(name: string) {
		if (name.length < 3) {
			throw new Error('O nome tem que possuir no mínimo 3 caracteres')
		}

		this.name = name;
	}


	

}