const techList = (array, nome) => {
	try {
		if (array.length === 0) { 
			throw new Error("Vazio!");
		}
		array.sort()
		array.forEach((tec, i) => {
			array[i] = {tech: tec, name : nome}

		});
		return array;
	} catch (erro){
		return erro.message
	}
}
module.exports = techList;