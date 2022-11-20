const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
const generateDamage = (maximoDamage) => {
	for (let index = 0; index === 0; index += 0) {
		let num = Math.floor(Math.random() * maximoDamage)
		if(num > 15) {
			return num;
		}
	}

}

// console.log(generateDamage(50))
const damageDragon = (name, func) => {return func(name['strength'])};

console.log(damageDragon(warrior, generateDamage))
