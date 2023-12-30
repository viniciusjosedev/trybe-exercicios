const fetch = require('node-fetch');

async function teste() {
	const req = await (await fetch('http://localhost:3001/', { headers: { password: '1234' } })).json(); 
	console.log(req)
}

teste();
