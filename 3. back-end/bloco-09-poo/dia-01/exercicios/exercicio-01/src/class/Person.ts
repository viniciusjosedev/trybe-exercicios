export default class Person {
	name: string;
	birthDate: Date;
	
	constructor(name: string, birthDate: Date) {
		this.name = name;
		this.birthDate = birthDate
	}

	Getters() {
	}

	Setters() {
	}
}

const pessoa = new Person('vinicius', new Date());

console.log(pessoa);


