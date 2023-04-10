const express = require('express');
const fs = require('fs/promises');
const path = require('path')

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
	console.log(req.query);
	res.status(200).json({ok: 'ok'})
})

app.get('/movies/:id', async (req, res) => {
	const { id } = req.params;
	const movies = JSON.parse(await fs.readFile(path.resolve(__dirname, 'movies.json')));
	const filter = movies.filter(e => e.id === Number(id));
	return res.status(200).json(filter);
})

app.get('/movies', async (req, res) => {
	const movies = JSON.parse(await fs.readFile(path.resolve(__dirname, 'movies.json')));
	return res.status(200).json(movies); 
} )

app.post('/movies', async (req, res) => {
	const info = req.body;
	const movies = JSON.parse(await fs.readFile(path.resolve(__dirname, 'movies.json')));
	movies.push({id: movies.length + 1, ...info})
	await fs.writeFile(path.resolve(__dirname, 'movies.json'), JSON.stringify(movies))
	res.status(200).json(info);
})


app.put('/movies/:id', async (req, res) => {
	const { id } = req.params;
	const info = req.body;
	const movies = JSON.parse(await fs.readFile(path.resolve(__dirname, 'movies.json')));
	const find = movies.find(e => e.id === Number(id));

	if (!find) return res.status(401).json({ error: 'id not found' });
	
	const index = movies.findIndex(e => e.id === Number(id))
	movies[index] = {id: Number(id), ...info};
	fs.writeFile(path.resolve(__dirname, 'movies.json'), JSON.stringify(movies))
	return res.status(200).json(info)
})

app.delete('/movies/:id', async (req, res) => {
	const { id } = req.params;
	const movies = JSON.parse(await fs.readFile(path.resolve(__dirname, 'movies.json')));
	const find = movies.find(e => e.id === Number(id));

	if (!find) return res.status(401).json({ error: 'id not found' });

	const filterDelete = movies.filter(e => e.id !== Number(id));
	await fs.writeFile(path.resolve(__dirname, 'movies.json'), JSON.stringify(filterDelete));
	return res.status(200).json(find);

})

module.exports = app;
