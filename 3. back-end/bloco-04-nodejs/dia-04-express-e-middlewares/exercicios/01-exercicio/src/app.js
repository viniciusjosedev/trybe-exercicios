const express = require('express');
const activitiesPost = require('./routes/activities.route');
const fs = require('fs/promises');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.use(activitiesPost)

app.get('/', async (req, res) => {
	const readFile = JSON.parse(await fs.readFile(path.resolve(__dirname, 'routes/activites.json')));
	const { headers: { password } } = req;
	if(!password) return res.status(400).json({erro: 'senha invalida'})

	return res.status(200).json(readFile);
	
})

app.use((error, req, res, next) => {
	if(error.message === 'name') return res.status(400).json({ "message": "O campo name é obrigatório" });
	if(error.message === '4 caracteres') return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
	if(error.message === 'price') return res.status(400).json({ "message": "O campo price é obrigatório" });
	if(error.message === 'price > 0') return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
	if (error.message.includes('campo')) return res.status(400).json(error.message);
	return res.status(500).json({ erro: 'Opa! Aconteceu algo inesperado' });
});

module.exports = app;
