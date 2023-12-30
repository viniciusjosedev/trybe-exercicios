const fetch = require('node-fetch');

async function teste() {
	const requisicao = await ( await fetch('https://lms-assets.betrybe.com/lms/simpsons.json') ).json()
	console.log(requisicao);
}


teste()