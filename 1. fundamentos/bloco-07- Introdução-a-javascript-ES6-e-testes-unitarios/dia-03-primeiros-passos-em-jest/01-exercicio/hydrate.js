const hydrate = (string) => {
	const lista = string.split('')
	let cont = 0
	lista.forEach(palavra => {
		cont = (isNaN(palavra) || palavra === ' ') ? cont += 0: cont += parseInt(palavra) 
	});
	console.log(cont)
	return (cont > 1 ) ? `${cont} copos de água` : `${cont} copo de água` 
}

module.exports = hydrate;


