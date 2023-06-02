import Person from "./Person";

type Obj = {
	name: string;
	birthDate: Date;
}

export default class Teacher extends Person implements Employee {
	subject: string;

	constructor(obj: Obj) {
		super(obj.name, obj.birthDate);
		


	}
}